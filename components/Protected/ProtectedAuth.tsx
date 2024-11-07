import { useTypedSelector } from "@/redux/store";
import { useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";

export default function ProtectedAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSegments() as string[];
  const isAuth = useTypedSelector((state) => state.auth.authenticate);
  const router = useRouter()
  useEffect(()=>{
    if(!isAuth && segment.includes('(protected)')){
      router.navigate('/(tabs)')
    }
  },[segment])
  return children;
}
