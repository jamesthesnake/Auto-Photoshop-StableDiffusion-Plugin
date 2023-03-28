const MaintainPositionSettings = {
    0: {
        module: 'openpose',
        model: 'control_sd15_openpose [fef5e48e]',
        weight: 1,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 0.3,
        guessmode: null,
    },
    1: {
        module: 'depth',
        model: 'control_sd15_depth [fef5e48e]',
        weight: 0.8,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 0.6,
        guessmode: null,
    },
}

const Pose_Depth_Canny_HandFix = {
    0: {
        module: 'openpose',
        model: 'control_sd15_openpose [fef5e48e]',
        weight: 1,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 1,
        guessmode: null,
    },
    1: {
        module: 'depth',
        model: 'control_sd15_depth [fef5e48e]',
        weight: 1.3,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0.3,
        guidance_end: 1,
        guessmode: null,
    },
    2: {
        module: 'canny',
        model: 'control_sd15_canny [fef5e48e]',
        weight: 1.3,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0.3,
        guidance_end: 1,
        guessmode: null,
    },
}

MaintainComposition_Character = {
    0: {
        module: 'openpose',
        model: 'control_sd15_openpose [fef5e48e]',
        weight: 1,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 0.5,
        guessmode: null,
    },
    1: {
        module: 'canny',
        model: 'control_sd15_canny [fef5e48e]',
        weight: 1,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 0.8,
        guessmode: null,
    },
    2: {
        weight: 1,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 1,
        guessmode: null,
    },
}

const LogoCreation = {
    0: {
        module: 'canny',
        model: 'control_sd15_canny [fef5e48e]',
        weight: 1.3,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 0.9,
        guessmode: null,
    },
    1: {
        module: 'scribble',
        model: 'control_sd15_scribble [fef5e48e]',
        weight: 1,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 1,
        guessmode: null,
    },
    2: {
        weight: 1,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 1,
        guessmode: null,
    },
}

const Backgrounds = {
    0: {
        module: 'mlsd',
        model: 'control_sd15_mlsd [fef5e48e]',
        weight: 1.3,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 0.7,
        guessmode: null,
    },
    1: {
        weight: 1,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 1,
        guessmode: null,
    },
    2: {
        weight: 1,
        resize_mode: null,
        lowvram: null,
        processor_res: null,
        threshold_a: null,
        threshold_b: null,
        guidance_start: 0,
        guidance_end: 1,
        guessmode: null,
    },
}
const ControlNetNativePresets = {
    'Maintain Position': MaintainPositionSettings,
    'Hand Fix': Pose_Depth_Canny_HandFix,
    'Maintain Composition (Character)': MaintainComposition_Character,
    'Logo Creation': LogoCreation,
    Backgrounds: Backgrounds,
}
module.exports = {
    ControlNetNativePresets,
}
