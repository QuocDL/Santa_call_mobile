import { setModalOpen } from "@/redux/slice/authSlice";
import { useTypedSelector } from "@/redux/store";
import { Href, LinkProps, useRouter, useSegments } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function ProtectedAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSegments() as string[];
  const isAuth = useTypedSelector(state => state.auth.authenticate);
  const dispatch = useDispatch();
  const router = useRouter();
  const [previousRoute, setPreviousRoute] = useState<string | null>(null);
  useLayoutEffect(() => {
    if (segment.length) {
      setPreviousRoute(segment.join('/'));
    }
    if (segment.includes('(protected)') && !isAuth) {
      dispatch(setModalOpen());
      if (segment.includes('Account')) {
        router.replace(`${previousRoute}` as Href<LinkProps<string>>)
      } else {
        if (router.canDismiss()) {
          router.dismiss()
        }
      }
    }
    if (segment.includes('auth') && isAuth) {
      router.replace(`${previousRoute}` as Href<LinkProps<string>>)
    }
  }, [isAuth, segment, previousRoute, router]);

  return children;
}
