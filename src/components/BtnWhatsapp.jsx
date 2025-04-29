
import iconWhatsapp from "/assets/images/icons/whatsapp.svg"
export const BtnWatsapp = () => {
    return (
        <a href="https://wa.me/5555279990555?text=Ol%C3%A1%20gostaria%20de%20saber%20informa%C3%A7%C3%B5es%20sobre%20a%20Solta%20Move." className="bg-whatsapp fixed z-20 right-6 bottom-6 w-16 h-16 hover:brightness-105 hover:shadow-xl ease-in-out duration-300 rounded-full p-3 shadow-md" target="_blank"><img src={iconWhatsapp} alt="Chamar no whatsapp" /></a>
    )
}