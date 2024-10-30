import { setModalOpen } from "@/redux/slice/authSlice";
import { useTypedSelector } from "@/redux/store";
import { Slot, useSegments } from "expo-router";
import React, { useEffect } from "react"; 
import { useDispatch } from "react-redux";

export default function ProtectedAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSegments() as string[];
  const isAuth = useTypedSelector(state => state.auth.authenticate)
  const dispatch = useDispatch()
  useEffect(() => {
    if (segment.includes('(protected)') && !isAuth) {
      dispatch(setModalOpen());
    }
  }, [isAuth, segment]);
  if (segment.includes('(protected)') && !isAuth) {
    return <Slot/>
  }
  return children
}
