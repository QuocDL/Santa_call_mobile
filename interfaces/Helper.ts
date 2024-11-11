import { Href, LinkProps } from "expo-router";

export type LinkType = Href<LinkProps<string>>

export type IAxiosResponse<T> = {
    data: T,
    message: string,
    status: number
}