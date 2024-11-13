import { setModalOpen } from "@/redux/slice/authSlice"
import { useAppDispatch, useTypedSelector } from "@/redux/store"
import { HrefInputParams } from "expo-router"
import { Href, LinkProps, useRouter, useSegments } from "expo-router"

export const useRouterProtected = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const isAuth = useTypedSelector(state => state.auth.authenticate)
    const navigate = (href: Href) => {
        if ((href as string).includes('(protected)') && !isAuth) {
            dispatch(setModalOpen())
        } else {
            router.navigate(href as Href)
        }
    }
    const replace = (href: Href) => {
        if ((href as string).includes('(protected)') && !isAuth) {
            dispatch(setModalOpen())
        } else {
            router.replace(href as Href)
        } 
    }
    return { navigate, replace, router }
}