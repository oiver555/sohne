import {
  EffectComposer,
  Glitch,
  GodRays,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction, KernelSize, Resizer } from "postprocessing";
import { forwardRef } from "react";

const Effects = forwardRef((props, test) => {
  console.log(test);

  const {
    sunSamples,
    sunDensity,
    sunDecay,
    sunWeight,
    sunExposure,
    sunBlendFunction,
    sunClampMax,
    sunKernelSize,
  } = useControls({
    sunSamples: {
      value: 20,
      step: 0.01,
    },
    sunDensity: {
      value: 1,
      min: 0,
      step: 0.01,
    },
    sunDecay: {
      value: 1,
      step: 0.01,
    },
    sunWeight: {
      value: 2,
      step: 0.01,
    },
    sunExposure: {
      value: 0.1,
      step: 0.01,
    },

    sunClampMax: {
      value: 2,
      step: 0.01,
    },
    sunBlendFunction: {
      options: {
        ADD: BlendFunction.ADD,
        ALPHA: BlendFunction.ALPHA,
        AVERAGE: BlendFunction.AVERAGE,
        COLOR: BlendFunction.COLOR,
        COLOR_BURN: BlendFunction.COLOR_BURN,
        COLOR_DODGE: BlendFunction.COLOR_DODGE,
        DARKEN: BlendFunction.DARKEN,
        DIFFERENCE: BlendFunction.DIFFERENCE,
        DIVIDE: BlendFunction.DIVIDE,
        DST: BlendFunction.DST,
        EXCLUSION: BlendFunction.EXCLUSION,
        HARD_LIGHT: BlendFunction.HARD_LIGHT,
        HARD_MIX: BlendFunction.HARD_MIX,
        HUE: BlendFunction.HUE,
        INVERT: BlendFunction.INVERT,
        INVERT_RGB: BlendFunction.INVERT_RGB,
        LIGHTEN: BlendFunction.LIGHTEN,
        LINEAR_BURN: BlendFunction.LINEAR_BURN,
        LINEAR_DODGE: BlendFunction.LINEAR_DODGE,
        LINEAR_LIGHT: BlendFunction.LINEAR_LIGHT,
        LUMINOSITY: BlendFunction.LUMINOSITY,
        MULTIPLY: BlendFunction.MULTIPLY,
        NEGATION: BlendFunction.NEGATION,
        NORMAL: BlendFunction.NORMAL,
        OVERLAY: BlendFunction.OVERLAY,
        PIN_LIGHT: BlendFunction.PIN_LIGHT,
        REFLECT: BlendFunction.REFLECT,
        SATURATION: BlendFunction.SATURATION,
        SCREEN: BlendFunction.SCREEN,
        SET: BlendFunction.SET,
        SKIP: BlendFunction.SKIP,
        SOFT_LIGHT: BlendFunction.SOFT_LIGHT,
        SRC: BlendFunction.SRC,
        SUBTRACT: BlendFunction.SUBTRACT,
        VIVID_LIGHT: BlendFunction.VIVID_LIGHT,
      },
    },
    sunKernelSize: {
        options: {
          HUGE: KernelSize.HUGE,
          LARGE: KernelSize.LARGE,
          MEDIUM: KernelSize.MEDIUM,
          SMALL: KernelSize.SMALL,
          VERY_LARGE: KernelSize.VERY_LARGE,
          VERY_SMALL: KernelSize.VERY_SMALL,
        },
      },
    sunBlur: {
      value: true,
    },
  });
  return (
    <EffectComposer multisampling={16} disableNormalPass>
      <GodRays
        sun={test}
        // resolutionScale={5}
        blendFunction={sunBlendFunction} // The blend function of this effect.
        samples={sunSamples} // The number of samples per pixel.
        density={sunDensity} // The density of the light rays.
        decay={sunDecay} // An illumination decay factor.
        weight={sunWeight} // A light ray weight factor.
        exposure={sunExposure} // A constant attenuation coefficient.
        clampMax={sunClampMax} // An upper bound for the saturation of the overall effect.
        kernelSize={sunKernelSize} // The blur kernel size. Has no effect if blur is disabled.
        blur={true} // Whether the god rays should be blurred to reduce artifacts.
      />
      <Vignette darkness={0.4} />
    </EffectComposer>
  );
});

export default Effects;
