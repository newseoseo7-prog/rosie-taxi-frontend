// Define types for our section system

type SettingType =
    | 'text'
    | 'textarea'
    | 'number'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'color'
    | 'image'
    | 'html'
    | 'collection'
    | 'product'
    | 'url'
    | 'range';

interface BaseSetting {
    id: string;
    label: string;
    type: SettingType;
    default?: any;
    info?: string;
    placeholder?: string;
}

interface TextSetting extends BaseSetting {
    type: 'text' | 'textarea' | 'url';
    default?: string;
}

interface NumberSetting extends BaseSetting {
    type: 'number' | 'range';
    default?: number;
    min?: number;
    max?: number;
    step?: number;
}

interface CheckboxSetting extends BaseSetting {
    type: 'checkbox';
    default?: boolean;
}

interface SelectOption {
    value: string;
    label: string;
}

interface SelectSetting extends BaseSetting {
    type: 'select' | 'radio';
    options: SelectOption[];
    default?: string;
}

interface ColorSetting extends BaseSetting {
    type: 'color';
    default?: string;
}

interface ImageSetting extends BaseSetting {
    type: 'image';
    default?: string;
}

interface HTMLSetting extends BaseSetting {
    type: 'html';
    default?: string;
}

interface CollectionSetting extends BaseSetting {
    type: 'collection';
    default?: string;
}

interface ProductSetting extends BaseSetting {
    type: 'product';
    default?: string;
}

type Setting =
    | TextSetting
    | NumberSetting
    | CheckboxSetting
    | SelectSetting
    | ColorSetting
    | ImageSetting
    | HTMLSetting
    | CollectionSetting
    | ProductSetting;

interface SectionSettings {
    [key: string]: Setting;
}

interface Section {
    name: string;
    title: string;
    settings: SectionSettings;
    blocks?: Block[];
    max_blocks?: number;
    presets?: any[];
}

interface Block {
    name: string;
    type: string;
    settings: SectionSettings;
}

// Example implementation of a section
class SectionManager {
    private sections: Section[] = [];

    registerSection(section: Section): void {
        this.sections.push(section);
    }

    getSection(name: string): Section | undefined {
        return this.sections.find(s => s.name === name);
    }

    getAllSections(): Section[] {
        return [...this.sections];
    }

    renderSectionSettings(sectionName: string): HTMLElement {
        const section = this.getSection(sectionName);
        if (!section) {
            throw new Error(`Section ${sectionName} not found`);
        }

        const container = document.createElement('div');
        container.className = 'section-settings';

        // Add title
        const title = document.createElement('h2');
        title.textContent = section.title;
        container.appendChild(title);

        // Render each setting
        for (const [settingId, setting] of Object.entries(section.settings)) {
            const settingElement = this.renderSetting(setting);
            container.appendChild(settingElement);
        }

        return container;
    }

    private renderSetting(setting: Setting): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.className = 'setting-wrapper';

        const label = document.createElement('label');
        label.textContent = setting.label;
        label.htmlFor = setting.id;
        wrapper.appendChild(label);

        let input: HTMLElement;

        switch (setting.type) {
            case 'text':
            case 'url':
                input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('id', setting.id);
                input.setAttribute('name', setting.id);
                if (setting.placeholder) {
                    input.setAttribute('placeholder', setting.placeholder);
                }
                if (setting.default) {
                    input.setAttribute('value', setting.default);
                }
                break;

            case 'textarea':
                input = document.createElement('textarea');
                input.setAttribute('id', setting.id);
                input.setAttribute('name', setting.id);
                if (setting.placeholder) {
                    input.setAttribute('placeholder', setting.placeholder);
                }
                if (setting.default) {
                    input.textContent = setting.default;
                }
                break;

            case 'number':
            case 'range':
                input = document.createElement('input');
                input.setAttribute('type', setting.type);
                input.setAttribute('id', setting.id);
                input.setAttribute('name', setting.id);
                if (setting.default) {
                    input.setAttribute('value', setting.default.toString());
                }
                if ('min' in setting && setting.min !== undefined) {
                    input.setAttribute('min', setting.min.toString());
                }
                if ('max' in setting && setting.max !== undefined) {
                    input.setAttribute('max', setting.max.toString());
                }
                if ('step' in setting && setting.step !== undefined) {
                    input.setAttribute('step', setting.step.toString());
                }
                break;

            case 'checkbox':
                input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('id', setting.id);
                input.setAttribute('name', setting.id);
                if (setting.default) {
                    input.setAttribute('checked', 'checked');
                }
                break;

            case 'select':
            case 'radio':
                if (setting.type === 'select') {
                    input = document.createElement('select');
                    input.setAttribute('id', setting.id);
                    input.setAttribute('name', setting.id);
                    setting.options.forEach(option => {
                        const optionElement = document.createElement('option');
                        optionElement.value = option.value;
                        optionElement.textContent = option.label;
                        if (setting.default === option.value) {
                            optionElement.selected = true;
                        }
                        input.appendChild(optionElement);
                    });
                } else {
                    // For radio buttons, we need multiple inputs
                    input = document.createElement('div');
                    setting.options.forEach(option => {
                        const radioWrapper = document.createElement('div');

                        const radioInput = document.createElement('input');
                        radioInput.setAttribute('type', 'radio');
                        radioInput.setAttribute('id', `${setting.id}_${option.value}`);
                        radioInput.setAttribute('name', setting.id);
                        radioInput.setAttribute('value', option.value);
                        if (setting.default === option.value) {
                            radioInput.checked = true;
                        }

                        const radioLabel = document.createElement('label');
                        radioLabel.textContent = option.label;
                        radioLabel.htmlFor = `${setting.id}_${option.value}`;

                        radioWrapper.appendChild(radioInput);
                        radioWrapper.appendChild(radioLabel);
                        input.appendChild(radioWrapper);
                    });
                }
                break;

            case 'color':
                input = document.createElement('input');
                input.setAttribute('type', 'color');
                input.setAttribute('id', setting.id);
                input.setAttribute('name', setting.id);
                if (setting.default) {
                    input.setAttribute('value', setting.default);
                }
                break;

            case 'image':
                input = document.createElement('div');
                input.className = 'image-upload';

                const preview = document.createElement('img');
                preview.style.maxWidth = '100px';
                preview.style.display = setting.default ? 'block' : 'none';
                if (setting.default) {
                    preview.src = setting.default;
                }

                const uploadButton = document.createElement('button');
                uploadButton.textContent = 'Upload Image';
                uploadButton.type = 'button';

                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.id = setting.id;
                hiddenInput.name = setting.id;
                if (setting.default) {
                    hiddenInput.value = setting.default;
                }

                uploadButton.addEventListener('click', () => {
                    // In a real implementation, this would open a file dialog
                    console.log('Image upload triggered');
                });

                input.appendChild(preview);
                input.appendChild(uploadButton);
                input.appendChild(hiddenInput);
                break;

            case 'html':
                input = document.createElement('div');
                input.className = 'html-editor';

                const editor = document.createElement('textarea');
                editor.id = setting.id;
                editor.name = setting.id;
                if (setting.default) {
                    editor.textContent = setting.default;
                }

                // In a real implementation, you'd use a rich text editor here
                input.appendChild(editor);
                break;

            default:
                input = document.createElement('div');
                input.textContent = `Setting type ${setting.type} not implemented`;
        }

        wrapper.appendChild(input);

        if (setting.info) {
            const info = document.createElement('p');
            info.className = 'setting-info';
            info.textContent = setting.info;
            wrapper.appendChild(info);
        }

        return wrapper;
    }
}

// Example usage:
const sectionManager = new SectionManager();

// Register a hero banner section
sectionManager.registerSection({
    name: 'hero-banner',
    title: 'Hero Banner',
    settings: {
        heading: {
            id: 'heading',
            type: 'text',
            label: 'Heading',
            default: 'Welcome to our store'
        },
        subheading: {
            id: 'subheading',
            type: 'text',
            label: 'Subheading',
            default: 'Discover amazing products'
        },
        text_color: {
            id: 'text_color',
            type: 'color',
            label: 'Text color',
            default: '#ffffff'
        },
        background_color: {
            id: 'background_color',
            type: 'color',
            label: 'Background color',
            default: '#000000'
        },
        height: {
            id: 'height',
            type: 'range',
            label: 'Section height',
            default: 500,
            min: 200,
            max: 800,
            step: 10
        },
        show_button: {
            id: 'show_button',
            type: 'checkbox',
            label: 'Show button',
            default: true
        },
        button_style: {
            id: 'button_style',
            type: 'select',
            label: 'Button style',
            options: [
                { value: 'primary', label: 'Primary' },
                { value: 'secondary', label: 'Secondary' },
                { value: 'outline', label: 'Outline' }
            ],
            default: 'primary'
        },
        background_image: {
            id: 'background_image',
            type: 'image',
            label: 'Background image'
        },
        content_alignment: {
            id: 'content_alignment',
            type: 'radio',
            label: 'Content alignment',
            options: [
                { value: 'left', label: 'Left' },
                { value: 'center', label: 'Center' },
                { value: 'right', label: 'Right' }
            ],
            default: 'center'
        }
    }
});

// To render the settings in your UI:
// document.body.appendChild(sectionManager.renderSectionSettings('hero-banner'));``````