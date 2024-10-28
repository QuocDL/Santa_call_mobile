import { Stack } from "expo-router"

export default ()=>{
    return (
        <Stack>
            <Stack.Screen name="swap-image/[id]" options={{animation: 'fade',headerShown: false}}/>
        </Stack>
    )
}