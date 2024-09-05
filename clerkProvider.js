import { ClerkProvider, RedirectToSignIn } from '@clerk/clerk-sdk-react-native';
import { useAuth } from '@clerk/clerk-sdk-react-native';

const clerkFrontendApi = 'YOUR_FRONTEND_API'; // Get this from Clerk

export default function App() {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <YourApp />
    </ClerkProvider>
  );
}
