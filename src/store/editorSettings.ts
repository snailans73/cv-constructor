import { makeAutoObservable } from "mobx";

export type PaddingSettingModes = 'all' | 'topbottom' | 'leftright' | 'top' | 'bottom' | 'left' | 'right'
export type Paddings = {
  top: number,
  left: number,
  right: number,
  bottom: number
}

export type FontSize = string;

export type Settings = {
  paddings: Paddings
  customFontSize?: FontSize
}

class EditorSetitngs {
  paddings: Paddings = {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
  }

  customFontSize?: FontSize = this.calculateFontSize()
  
  constructor() {
    makeAutoObservable(this)
  }

  setPadding(value: number, type: PaddingSettingModes = 'all') {
    if (!value) return;
    switch (type) {
      case 'all': 
        this.paddings = {
          top: value,
          left: value,
          right: value,
          bottom: value
        }
        break
      case 'topbottom':
        this.paddings = {
          ...this.paddings,
          top: value,
          bottom: value 
        }
        break
      case 'leftright':
        this.paddings = {
          ...this.paddings,
          left: value, 
          right: value
        }
        break
      default:
        this.paddings = {
          ...this.paddings,
          [type]: value
        }
        break
    }
  }

  setCustomFontSize(value?: string) {
    if (value) return this.customFontSize = value.replaceAll(',', '.').replaceAll(' ', '')
    this.customFontSize = this.calculateFontSize()
  }

  get fontSize() {
    if (this.customFontSize) return this.customFontSize
    return this.calculateFontSize()
  }

  calculateFontSize() {
    const MIN_FONT_SIZE = 9
    const MAX_FONT_SIZE = 5
    return (MIN_FONT_SIZE + MAX_FONT_SIZE * ((window.innerWidth - 1280) / (1920 - 1280))).toString()
  }

  get settings(): Settings {
    return {
      paddings: this.paddings,
      customFontSize: this.customFontSize
    }
  }
}

export default new EditorSetitngs();