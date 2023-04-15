import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Index from "../components/Home";
import {Default} from "../components/Home/index.stories";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Index/>
            </ComponentPreview>
            <ComponentPreview path="/Default">
                <Default/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;