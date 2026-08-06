import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BooksScreen } from '../../features/books/screens/BooksScreen/BooksScreen';
import { AddBookScreen } from '../../features/books/screens/AddBooks/AddBookScreen';
import { BookDetailScreen } from '../../features/books/screens/BookDetail/BookDetailScreen';
import { StatsScreen } from '../../features/books/screens/Stats/StatsScreen';
import { SignIn } from '../../features/auth/screens/SignIn/SignIn';
import { SignUp } from '../../features/auth/screens/SignUp/SignUp';
import { ForgotPassword } from '../../features/auth/screens/ForgotPassword/ForgotPassword';
import { Verification } from '../../features/auth/screens/Verification/Verification';
import { NewPassword } from '../../features/auth/screens/NewPassword/NewPassword';
import { ProfileScreen } from '../../features/profile/screens/ProfileScreen/ProfileScreen';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { store } from '../store/store';
import { CustomAlert } from '../../shared/components/CustomAlert/CustomAlert';
import { hideAlert } from '../store/alertSlice';
import { setUser, clearUser, setAuthLoading } from '../store/authSlice';
import { setProfileImage, setFavoriteGenres } from '../store/userSlice';
import { authService } from '../../features/auth/services/authService';
import { CustomIndicator } from '../../shared/components/CustomIndicator/CustomIndicator';

const Stack = createNativeStackNavigator();

const GlobalAlert = () => {
  const dispatch = useDispatch();
  const alertState = useSelector((state) => state.alert);

  return (
    <CustomAlert
      visible={alertState.visible}
      title={alertState.title}
      message={alertState.message}
      showCancel={alertState.showCancel}
      cancelText={alertState.cancelText}
      confirmText={alertState.confirmText}
      onClose={() => dispatch(hideAlert())}
      onConfirm={() => {
        dispatch(hideAlert());
        if (alertState.onConfirm) {
          alertState.onConfirm();
        }
      }}
    />
  );
};

const AppContent = () => {
  const dispatch = useDispatch();
  const {isAuthenticated,loading}=useSelector((state)=>state.auth);

  // Kullanıcı auth state'ini ve user_metadata'daki profil verilerini (fotoğraf,
  // favori türler) tek noktadan senkron tutar.
  const syncUser = (user) => {
    dispatch(setUser(user));
    dispatch(setProfileImage(user.user_metadata?.profileImage ?? null));
    dispatch(setFavoriteGenres(user.user_metadata?.favoriteGenres ?? ["1", "4"]));
  };

  useEffect(() => {
    // Uygulama açılışında mevcut session'ı kontrol et
    const initSession = async () => {
      try {
        const session = await authService.getSession();
        if (session?.user) {
          syncUser(session.user);
        } else {
          dispatch(setAuthLoading(false));
        }
      } catch (error) {
        dispatch(setAuthLoading(false));
      }
    };
    initSession();

    // Login/logout gibi auth değişikliklerini dinle
    let subscription;
    authService.onAuthStateChange((session, event) => {
      // Sadece gerçek login/logout durumlarında state güncelle.
      // PASSWORD_RECOVERY ve USER_UPDATED gibi event'ler geçici/aksiyon session'ları
      // temsil eder, kullanıcıyı "giriş yapılmış" saymamalıyız (aksi halde
      // şifre sıfırlama akışı Books ekranına düşer).
      if (event === "SIGNED_OUT") {
        dispatch(clearUser());
      } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "INITIAL_SESSION") {
        if (session?.user) {
          syncUser(session.user);
        } else {
          dispatch(clearUser());
        }
      }
    }).then((sub) => {
      subscription = sub;
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [dispatch]);

  if(loading){
    return <CustomIndicator visible={true} fullScreen={true} text="Oturum kontrol ediliyor..." />
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/**kulllancıını oturum kontorlüne göre ekranlar gösteriliyor */}
        {isAuthenticated?(
        <>
        <Stack.Screen name="Books" component={BooksScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddBook" component={AddBookScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Stats" component={StatsScreen} options={{ headerShown: false }} />
        </>
        ):
        <>          
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
        <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
        </>

        }
        
       
        
      </Stack.Navigator>
      <GlobalAlert />
    </NavigationContainer>
  );
};

export default function AppNavigator() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
