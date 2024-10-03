'use client'
import { getHistory } from "@/store/history-reducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toogleTheme } from "@/store/theme-reducer";
import { useEffect } from "react";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useAppSelector(({ themeReducer }) => themeReducer.theme);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getHistory(""));
    if (typeof window !== "undefined") {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (isDark) {
        dispatch(toogleTheme({ theme: "light" }));
      }
    }
  }, []);
  return (
    <body className={`${theme}-mode bg-background text-foreground`}>
      {children}
    </body>
  );
}
