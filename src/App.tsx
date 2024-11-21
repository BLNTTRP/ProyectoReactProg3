import {MiPrimerComponent} from "./components/MiPrimerComponent/MiPrimerComponent.tsx";
import {ComponentCounter} from "./components/ComponentCounter/ComponentCounter.tsx";
import {ComponentUseEffect} from "./components/ComponentUseEffect/ComponentUseEffect.tsx";
import {FormComponent} from "./components/FormComponent/FormComponent.tsx";
import {AppProduct} from "./components/AppProduct/AppProduct.tsx";

export const App = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', gap:"2vh"}}>
            {/*<MiPrimerComponent
                text={"Texto desde propiedades"}
                color="red"
                fontSize={5}
            />
            <ComponentCounter/>
            <ComponentUseEffect/>
            <FormComponent/>*/}
            <AppProduct/>
        </div>
    )
}