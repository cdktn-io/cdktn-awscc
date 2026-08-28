// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssessmentTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template#assessment_target_arn CcAssessmentTemplate#assessment_target_arn}
    */
    readonly assessmentTargetArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template#assessment_template_name CcAssessmentTemplate#assessment_template_name}
    */
    readonly assessmentTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template#duration_in_seconds CcAssessmentTemplate#duration_in_seconds}
    */
    readonly durationInSeconds: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template#rules_package_arns CcAssessmentTemplate#rules_package_arns}
    */
    readonly rulesPackageArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template#user_attributes_for_findings CcAssessmentTemplate#user_attributes_for_findings}
    */
    readonly userAttributesForFindings?: CcAssessmentTemplate.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template awscc_inspector_assessment_template}
*/
export class CcAssessmentTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_inspector_assessment_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAssessmentTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAssessmentTemplate to import
    * @param importFromId The id of the existing CcAssessmentTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAssessmentTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspector_assessment_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template awscc_inspector_assessment_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssessmentTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcAssessmentTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_inspector_assessment_template',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._assessmentTargetArn = config.assessmentTargetArn;
        this._assessmentTemplateName = config.assessmentTemplateName;
        this._durationInSeconds = config.durationInSeconds;
        this._rulesPackageArns = config.rulesPackageArns;
        this._userAttributesForFindings.internalValue = config.userAttributesForFindings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // assessment_target_arn - computed: false, optional: false, required: true
    private _assessmentTargetArn?: string; 
    public get assessmentTargetArn() {
        return this.getStringAttribute('assessment_target_arn');
    }
    public set assessmentTargetArn(value: string) {
        this._assessmentTargetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assessmentTargetArnInput() {
        return this._assessmentTargetArn;
    }

    // assessment_template_name - computed: true, optional: true, required: false
    private _assessmentTemplateName?: string; 
    public get assessmentTemplateName() {
        return this.getStringAttribute('assessment_template_name');
    }
    public set assessmentTemplateName(value: string) {
        this._assessmentTemplateName = value;
    }
    public resetAssessmentTemplateName() {
        this._assessmentTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assessmentTemplateNameInput() {
        return this._assessmentTemplateName;
    }

    // duration_in_seconds - computed: false, optional: false, required: true
    private _durationInSeconds?: number; 
    public get durationInSeconds() {
        return this.getNumberAttribute('duration_in_seconds');
    }
    public set durationInSeconds(value: number) {
        this._durationInSeconds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInSecondsInput() {
        return this._durationInSeconds;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rules_package_arns - computed: false, optional: false, required: true
    private _rulesPackageArns?: string[]; 
    public get rulesPackageArns() {
        return this.getListAttribute('rules_package_arns');
    }
    public set rulesPackageArns(value: string[]) {
        this._rulesPackageArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesPackageArnsInput() {
        return this._rulesPackageArns;
    }

    // user_attributes_for_findings - computed: true, optional: true, required: false
    private _userAttributesForFindings = new CcAssessmentTemplate.TagPropertyList(this, "user_attributes_for_findings", false);
    public get userAttributesForFindings() {
        return this._userAttributesForFindings;
    }
    public putUserAttributesForFindings(value: CcAssessmentTemplate.TagProperty[] | cdktn.IResolvable) {
        this._userAttributesForFindings.internalValue = value;
    }
    public resetUserAttributesForFindings() {
        this._userAttributesForFindings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAttributesForFindingsInput() {
        return this._userAttributesForFindings.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            assessment_target_arn: cdktn.stringToTerraform(this._assessmentTargetArn),
            assessment_template_name: cdktn.stringToTerraform(this._assessmentTemplateName),
            duration_in_seconds: cdktn.numberToTerraform(this._durationInSeconds),
            rules_package_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._rulesPackageArns),
            user_attributes_for_findings: cdktn.listMapper(ccAssessmentTemplateTagPropertyToTerraform, false)(this._userAttributesForFindings.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assessment_target_arn: {
                value: cdktn.stringToHclTerraform(this._assessmentTargetArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            assessment_template_name: {
                value: cdktn.stringToHclTerraform(this._assessmentTemplateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            duration_in_seconds: {
                value: cdktn.numberToHclTerraform(this._durationInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rules_package_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._rulesPackageArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            user_attributes_for_findings: {
                value: cdktn.listMapperHcl(ccAssessmentTemplateTagPropertyToHclTerraform, false)(this._userAttributesForFindings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAssessmentTemplate.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAssessmentTemplateTagPropertyToTerraform(struct?: CcAssessmentTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAssessmentTemplateTagPropertyToHclTerraform(struct?: CcAssessmentTemplate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAssessmentTemplate {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template#key CcAssessmentTemplate#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspector_assessment_template#value CcAssessmentTemplate#value}
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
