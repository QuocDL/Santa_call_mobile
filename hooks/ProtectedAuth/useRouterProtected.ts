import { setModalOpen } from "@/redux/slice/authSlice"
import { useAppDispatch, useTypedSelector } from "@/redux/store"
import { Href, LinkProps, useRouter, useSegments } from "expo-router"

export const useRouterProtected = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const isAuth = useTypedSelector(state => state.auth.authenticate)
    const navigate = (href: Href<LinkProps<string>>) => {
        if ((href as string).includes('(protected)') && !isAuth) {
            dispatch(setModalOpen())
        } else {
            router.navigate(href as Href<LinkProps<string>>)
        }
    }
    const replace = (href: Href<LinkProps<string>>) => {
        if ((href as string).includes('(protected)') && !isAuth) {
            dispatch(setModalOpen())
        } else {
            router.replace(href as Href<LinkProps<string>>)
        } 
    }
    return { navigate, replace, router }
}