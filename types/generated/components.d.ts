import type { Schema, Attribute } from '@strapi/strapi';

export interface ContainerFormContainer extends Schema.Component {
  collectionName: 'components_container_form_containers';
  info: {
    displayName: 'formContainer';
    icon: 'information';
  };
  attributes: {
    layout: Attribute.Component<'layout.layout'>;
    forms: Attribute.Component<'form.multi-form', true>;
    button: Attribute.Component<'ui.button', true>;
  };
}

export interface FormDobSingleInput extends Schema.Component {
  collectionName: 'components_form_dob_single_inputs';
  info: {
    displayName: 'dobSingleInput';
    icon: 'user';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
    placeholder: Attribute.String;
    fieldName: Attribute.Relation<
      'form.dob-single-input',
      'oneToOne',
      'api::form-field-name.form-field-name'
    >;
    visibility: Attribute.Boolean & Attribute.DefaultTo<true>;
    defaultValue: Attribute.String;
  };
}

export interface FormFieldConfig extends Schema.Component {
  collectionName: 'components_form_field_configs';
  info: {
    displayName: 'fieldConfig';
  };
  attributes: {
    visibility: Attribute.Boolean;
    defaultValue: Attribute.String;
    fieldName: Attribute.Relation<
      'form.field-config',
      'oneToOne',
      'api::form-field-name.form-field-name'
    >;
    label: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface FormInput extends Schema.Component {
  collectionName: 'components_form_inputs';
  info: {
    displayName: 'input';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    fieldName: Attribute.Relation<
      'form.input',
      'oneToOne',
      'api::form-field-name.form-field-name'
    >;
    type: Attribute.String;
    label: Attribute.String;
    placeholder: Attribute.String;
    suggestion: Attribute.String;
    style: Attribute.JSON;
    visibility: Attribute.Boolean & Attribute.DefaultTo<true>;
    defaultValue: Attribute.String;
  };
}

export interface FormMultiForm extends Schema.Component {
  collectionName: 'components_form_multi_forms';
  info: {
    displayName: 'multiForm';
    icon: 'layer';
  };
  attributes: {
    name: Attribute.String;
    form: Attribute.Relation<'form.multi-form', 'oneToOne', 'api::form.form'>;
    rules: Attribute.Component<'logical.json-rule', true>;
  };
}

export interface FormPhoneNumber extends Schema.Component {
  collectionName: 'components_form_phone_numbers';
  info: {
    displayName: 'PhoneNumber';
    icon: 'phone';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
    placeholder: Attribute.String;
    fieldName: Attribute.Relation<
      'form.phone-number',
      'oneToOne',
      'api::form-field-name.form-field-name'
    >;
    visibility: Attribute.Boolean & Attribute.DefaultTo<true>;
    dataSourceName: Attribute.Relation<
      'form.phone-number',
      'oneToOne',
      'api::data-source-name.data-source-name'
    >;
    dataFilter: Attribute.Component<'logical.data-filter', true>;
    popUp: Attribute.Relation<
      'form.phone-number',
      'oneToOne',
      'api::pop-up.pop-up'
    >;
    defaultValue: Attribute.String;
  };
}

export interface LayoutFormNavigation extends Schema.Component {
  collectionName: 'components_layout_form_navigations';
  info: {
    displayName: 'formNavigation';
    icon: 'arrowRight';
  };
  attributes: {
    url: Attribute.String;
    page: Attribute.Relation<
      'layout.form-navigation',
      'oneToOne',
      'api::page.page'
    >;
  };
}

export interface LayoutLayoutOrder extends Schema.Component {
  collectionName: 'components_layout_layout_orders';
  info: {
    displayName: 'layoutOrder';
    icon: 'bulletList';
  };
  attributes: {
    componentName: Attribute.String;
    position: Attribute.Enumeration<
      [
        'pos1',
        'pos2',
        'pos3',
        'pos4',
        'pos5',
        'pos6',
        'pos7',
        'pos8',
        'pos9',
        'pos10',
        'pos11',
        'pos12',
        'pos13',
        'pos14'
      ]
    >;
  };
}

export interface LayoutLayout extends Schema.Component {
  collectionName: 'components_layout_layouts';
  info: {
    displayName: 'layout';
    icon: 'layout';
    description: '';
  };
  attributes: {
    margin: Attribute.String;
    padding: Attribute.String;
    style: Attribute.JSON;
    layoutOrder: Attribute.Component<'layout.layout-order', true>;
    layout: Attribute.Relation<
      'layout.layout',
      'oneToOne',
      'api::layout.layout'
    >;
  };
}

export interface LogicalDataFilter extends Schema.Component {
  collectionName: 'components_logical_data_filters';
  info: {
    displayName: 'DataFilter';
    icon: 'filter';
  };
  attributes: {
    key: Attribute.Enumeration<['name', 'title', 'value']>;
    value: Attribute.String;
  };
}

export interface LogicalJsonRule extends Schema.Component {
  collectionName: 'components_logical_json_rules';
  info: {
    displayName: 'jsonRule';
    icon: 'connector';
  };
  attributes: {
    any: Attribute.Component<'logical.rule', true>;
    all: Attribute.Component<'logical.rule', true>;
    roleOutput: Attribute.Component<'logical.key-value'>;
    relationBetweenAnyAll: Attribute.Enumeration<['any', 'all']> &
      Attribute.DefaultTo<'any'>;
    relationWithNextRule: Attribute.Enumeration<['any', 'all']> &
      Attribute.DefaultTo<'all'>;
  };
}

export interface LogicalKeyValue extends Schema.Component {
  collectionName: 'components_logical_key_values';
  info: {
    displayName: 'keyValue';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    value: Attribute.String;
    isVisible: Attribute.Boolean & Attribute.DefaultTo<true>;
    isDisable: Attribute.Boolean & Attribute.DefaultTo<false>;
    key: Attribute.String;
  };
}

export interface LogicalRuleValues extends Schema.Component {
  collectionName: 'components_logical_rule_values';
  info: {
    displayName: 'ruleValues';
    icon: 'hashtag';
  };
  attributes: {
    value: Attribute.Enumeration<['all']>;
    customValue: Attribute.String;
  };
}

export interface LogicalRule extends Schema.Component {
  collectionName: 'components_logical_rules';
  info: {
    displayName: 'rule';
    icon: 'chartCircle';
  };
  attributes: {
    fact: Attribute.Relation<
      'logical.rule',
      'oneToOne',
      'api::form-field-name.form-field-name'
    >;
    operator: Attribute.Enumeration<
      [
        'equal',
        'greaterThan',
        'greaterThanInclusive',
        'lessThan',
        'lessThanInclusive',
        'notEqual',
        'in',
        'notIn',
        'contains',
        'doesNotContain'
      ]
    >;
    customValue: Attribute.String;
    value: Attribute.Enumeration<['M', 'F']>;
    values: Attribute.Component<'logical.rule-values', true>;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    name: Attribute.String;
    type: Attribute.String;
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface UiCheckbox extends Schema.Component {
  collectionName: 'components_ui_checkboxes';
  info: {
    displayName: 'Checkbox';
    icon: 'check';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
    defaultValue: Attribute.String;
  };
}

export interface UiLogo extends Schema.Component {
  collectionName: 'components_ui_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    altText: Attribute.String;
  };
}

export interface UiOption extends Schema.Component {
  collectionName: 'components_ui_options';
  info: {
    displayName: 'Option';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    dataSourceName: Attribute.Relation<
      'ui.option',
      'oneToOne',
      'api::data-source-name.data-source-name'
    >;
    componentType: Attribute.Enumeration<
      ['RadioGroup', 'ButtonGroup', 'Dropdown']
    >;
    style: Attribute.JSON;
    visibility: Attribute.Boolean & Attribute.DefaultTo<true>;
    label: Attribute.String;
    placeholder: Attribute.String;
    fieldName: Attribute.Relation<
      'ui.option',
      'oneToOne',
      'api::form-field-name.form-field-name'
    >;
    name: Attribute.String;
    popUp: Attribute.Relation<'ui.option', 'oneToOne', 'api::pop-up.pop-up'>;
    dataFilter: Attribute.Component<'logical.data-filter', true>;
    variant: Attribute.Enumeration<['checkbox']>;
    defaultValue: Attribute.String;
  };
}

export interface UiToggleSwitch extends Schema.Component {
  collectionName: 'components_ui_toggle_switches';
  info: {
    displayName: 'ToggleSwitch';
    icon: 'server';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
    defaultValue: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'container.form-container': ContainerFormContainer;
      'form.dob-single-input': FormDobSingleInput;
      'form.field-config': FormFieldConfig;
      'form.input': FormInput;
      'form.multi-form': FormMultiForm;
      'form.phone-number': FormPhoneNumber;
      'layout.form-navigation': LayoutFormNavigation;
      'layout.layout-order': LayoutLayoutOrder;
      'layout.layout': LayoutLayout;
      'logical.data-filter': LogicalDataFilter;
      'logical.json-rule': LogicalJsonRule;
      'logical.key-value': LogicalKeyValue;
      'logical.rule-values': LogicalRuleValues;
      'logical.rule': LogicalRule;
      'ui.button': UiButton;
      'ui.checkbox': UiCheckbox;
      'ui.logo': UiLogo;
      'ui.option': UiOption;
      'ui.toggle-switch': UiToggleSwitch;
    }
  }
}
