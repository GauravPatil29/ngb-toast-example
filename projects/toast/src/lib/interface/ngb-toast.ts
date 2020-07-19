export enum NgbToastType {
    Success = "tSuccess",
    Info = "tInfo",
    Warning = "tWarning",
    Danger = "tDanger",
    Primary = "tPrimary",
    Secondary = "tSecondary",
    Light = "tLight",
    Dark = "tDark"
}

export class NgbToast {
    toastType: NgbToastType;
    text: string;
    dismissible?: boolean;
    timeInSeconds?: number;
    onDismiss?: Function;
}