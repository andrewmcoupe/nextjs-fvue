import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import lightTheme from "../themes/lightTheme";
import { ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

/*
* While it's not required to use the AppRouterCacheProvider component,
* it's recommended to use it to ensure that the styles are appended to the <head> and not rendering in the <body>
* */

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
