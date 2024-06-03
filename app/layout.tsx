import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import lightTheme from "../themes/lightTheme";
import { ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
