import { setModalOpen } from "@/redux/slice/authSlice";
import { useTypedSelector } from "@/redux/store";
import { useSegments, useRouter, Href, LinkProps } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import ProviderContent from "../Provider/ProviderContent";
import images from "@/assets/images";

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
      if (previousRoute) {
        router.replace(`/${previousRoute}` as Href<LinkProps<string>>);
      }
      if(!previousRoute){
        router.replace('/(tabs)')
      }
    }
  }, [isAuth, segment, previousRoute, dispatch, router]);

  return children;
}
