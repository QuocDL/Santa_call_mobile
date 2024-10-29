import { useToast } from "react-native-toast-notifications";

type PropsType = {
  type?: "normal" | "success" | "warning" | "danger";
  placement?: "top" | "bottom" | "center";
  duration?: number;
  offset?: number;
  animationType?: "slide-in" | "zoom-in";
  text: string
};
export const useToastController = ()=>{
    const toast = useToast();
    function ToastController({
        type = "normal",
        placement = "bottom",
        duration = 3500,
        animationType= "slide-in",
        text
      }: PropsType){
        toast.show(text, {
            type,
            placement,
            duration,
            animationType,
        })
      };
      return {ToastController}
}

