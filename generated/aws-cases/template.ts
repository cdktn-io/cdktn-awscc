// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * A description explaining the purpose and use case for this template. Should indicate what types of cases this template is designed for and any specific workflow it supports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#description CcTemplate#description}
    */
    readonly description?: string;
    /**
    * The unique identifier of the Cases domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#domain_id CcTemplate#domain_id}
    */
    readonly domainId?: string;
    /**
    * Specifies the default layout to use when displaying cases created from this template. The layout determines which fields are visible and their arrangement in the agent interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#layout_configuration CcTemplate#layout_configuration}
    */
    readonly layoutConfiguration?: CcTemplate.LayoutConfigurationProperty;
    /**
    * A name for the template. It must be unique per domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#name CcTemplate#name}
    */
    readonly name: string;
    /**
    * A list of fields that must contain a value for a case to be successfully created with this template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#required_fields CcTemplate#required_fields}
    */
    readonly requiredFields?: CcTemplate.RequiredFieldProperty[] | cdktn.IResolvable;
    /**
    * A list of case rules (also known as case field conditions) on a template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#rules CcTemplate#rules}
    */
    readonly rules?: CcTemplate.TemplateRuleProperty[] | cdktn.IResolvable;
    /**
    * The current status of the template. Active templates can be used to create new cases, while Inactive templates are disabled but preserved for existing cases.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#status CcTemplate#status}
    */
    readonly status?: string;
    /**
    * The tags that you attach to this template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#tags CcTemplate#tags}
    */
    readonly tags?: CcTemplate.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template awscc_cases_template}
*/
export class CcTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cases_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTemplate to import
    * @param importFromId The id of the existing CcTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cases_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template awscc_cases_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cases_template',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._description = config.description;
        this._domainId = config.domainId;
        this._layoutConfiguration.internalValue = config.layoutConfiguration;
        this._name = config.name;
        this._requiredFields.internalValue = config.requiredFields;
        this._rules.internalValue = config.rules;
        this._status = config.status;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // domain_id - computed: true, optional: true, required: false
    private _domainId?: string; 
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }
    public set domainId(value: string) {
        this._domainId = value;
    }
    public resetDomainId() {
        this._domainId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdInput() {
        return this._domainId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // layout_configuration - computed: true, optional: true, required: false
    private _layoutConfiguration = new CcTemplate.LayoutConfigurationPropertyOutputReference(this, "layout_configuration");
    public get layoutConfiguration() {
        return this._layoutConfiguration;
    }
    public putLayoutConfiguration(value: CcTemplate.LayoutConfigurationProperty) {
        this._layoutConfiguration.internalValue = value;
    }
    public resetLayoutConfiguration() {
        this._layoutConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get layoutConfigurationInput() {
        return this._layoutConfiguration.internalValue;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // required_fields - computed: true, optional: true, required: false
    private _requiredFields = new CcTemplate.RequiredFieldPropertyList(this, "required_fields", false);
    public get requiredFields() {
        return this._requiredFields;
    }
    public putRequiredFields(value: CcTemplate.RequiredFieldProperty[] | cdktn.IResolvable) {
        this._requiredFields.internalValue = value;
    }
    public resetRequiredFields() {
        this._requiredFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredFieldsInput() {
        return this._requiredFields.internalValue;
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new CcTemplate.TemplateRulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: CcTemplate.TemplateRuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    public resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTemplate.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTemplate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_arn - computed: true, optional: false, required: false
    public get templateArn() {
        return this.getStringAttribute('template_arn');
    }

    // template_id - computed: true, optional: false, required: false
    public get templateId() {
        return this.getStringAttribute('template_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            domain_id: cdktn.stringToTerraform(this._domainId),
            layout_configuration: ccTemplateLayoutConfigurationPropertyToTerraform(this._layoutConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            required_fields: cdktn.listMapper(ccTemplateRequiredFieldPropertyToTerraform, false)(this._requiredFields.internalValue),
            rules: cdktn.listMapper(ccTemplateTemplateRulePropertyToTerraform, false)(this._rules.internalValue),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccTemplateTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_id: {
                value: cdktn.stringToHclTerraform(this._domainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            layout_configuration: {
                value: ccTemplateLayoutConfigurationPropertyToHclTerraform(this._layoutConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTemplate.LayoutConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            required_fields: {
                value: cdktn.listMapperHcl(ccTemplateRequiredFieldPropertyToHclTerraform, false)(this._requiredFields.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTemplate.RequiredFieldPropertyList",
            },
            rules: {
                value: cdktn.listMapperHcl(ccTemplateTemplateRulePropertyToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTemplate.TemplateRulePropertyList",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTemplateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTemplate.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTemplateLayoutConfigurationPropertyToTerraform(struct?: CcTemplate.LayoutConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_layout: cdktn.stringToTerraform(struct!.defaultLayout),
    }
}


export function ccTemplateLayoutConfigurationPropertyToHclTerraform(struct?: CcTemplate.LayoutConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_layout: {
            value: cdktn.stringToHclTerraform(struct!.defaultLayout),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateRequiredFieldPropertyToTerraform(struct?: CcTemplate.RequiredFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_id: cdktn.stringToTerraform(struct!.fieldId),
    }
}


export function ccTemplateRequiredFieldPropertyToHclTerraform(struct?: CcTemplate.RequiredFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_id: {
            value: cdktn.stringToHclTerraform(struct!.fieldId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateTemplateRulePropertyToTerraform(struct?: CcTemplate.TemplateRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        case_rule_id: cdktn.stringToTerraform(struct!.caseRuleId),
        field_id: cdktn.stringToTerraform(struct!.fieldId),
    }
}


export function ccTemplateTemplateRulePropertyToHclTerraform(struct?: CcTemplate.TemplateRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        case_rule_id: {
            value: cdktn.stringToHclTerraform(struct!.caseRuleId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_id: {
            value: cdktn.stringToHclTerraform(struct!.fieldId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateTagPropertyToTerraform(struct?: CcTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTemplateTagPropertyToHclTerraform(struct?: CcTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTemplate {
export interface LayoutConfigurationProperty {
    /**
    * The unique identifier of a layout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#default_layout CcTemplate#default_layout}
    */
    readonly defaultLayout?: string;
}
export class LayoutConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LayoutConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultLayout !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultLayout = this._defaultLayout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LayoutConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultLayout = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultLayout = value.defaultLayout;
        }
    }

    // default_layout - computed: true, optional: true, required: false
    private _defaultLayout?: string; 
    public get defaultLayout() {
        return this.getStringAttribute('default_layout');
    }
    public set defaultLayout(value: string) {
        this._defaultLayout = value;
    }
    public resetDefaultLayout() {
        this._defaultLayout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultLayoutInput() {
        return this._defaultLayout;
    }
}
export interface RequiredFieldProperty {
    /**
    * The unique identifier of a field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#field_id CcTemplate#field_id}
    */
    readonly fieldId?: string;
}
export class RequiredFieldPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): RequiredFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldId = this._fieldId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RequiredFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldId = value.fieldId;
        }
    }

    // field_id - computed: true, optional: true, required: false
    private _fieldId?: string; 
    public get fieldId() {
        return this.getStringAttribute('field_id');
    }
    public set fieldId(value: string) {
        this._fieldId = value;
    }
    public resetFieldId() {
        this._fieldId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldIdInput() {
        return this._fieldId;
    }
}

export class RequiredFieldPropertyList extends cdktn.ComplexList {
    public internalValue? : RequiredFieldProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): RequiredFieldPropertyOutputReference {
        return new RequiredFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TemplateRuleProperty {
    /**
    * The unique identifier of a case rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#case_rule_id CcTemplate#case_rule_id}
    */
    readonly caseRuleId?: string;
    /**
    * The ID of the field that this rule applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#field_id CcTemplate#field_id}
    */
    readonly fieldId?: string;
}
export class TemplateRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TemplateRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._caseRuleId !== undefined) {
            hasAnyValues = true;
            internalValueResult.caseRuleId = this._caseRuleId;
        }
        if (this._fieldId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldId = this._fieldId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._caseRuleId = undefined;
            this._fieldId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._caseRuleId = value.caseRuleId;
            this._fieldId = value.fieldId;
        }
    }

    // case_rule_id - computed: true, optional: true, required: false
    private _caseRuleId?: string; 
    public get caseRuleId() {
        return this.getStringAttribute('case_rule_id');
    }
    public set caseRuleId(value: string) {
        this._caseRuleId = value;
    }
    public resetCaseRuleId() {
        this._caseRuleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseRuleIdInput() {
        return this._caseRuleId;
    }

    // field_id - computed: true, optional: true, required: false
    private _fieldId?: string; 
    public get fieldId() {
        return this.getStringAttribute('field_id');
    }
    public set fieldId(value: string) {
        this._fieldId = value;
    }
    public resetFieldId() {
        this._fieldId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldIdInput() {
        return this._fieldId;
    }
}

export class TemplateRulePropertyList extends cdktn.ComplexList {
    public internalValue? : TemplateRuleProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TemplateRulePropertyOutputReference {
        return new TemplateRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#key CcTemplate#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_template#value CcTemplate#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
