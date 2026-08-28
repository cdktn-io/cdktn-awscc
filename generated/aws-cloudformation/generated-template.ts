// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_generated_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGeneratedTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The name assigned to the generated template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_generated_template#generated_template_name CcGeneratedTemplate#generated_template_name}
    */
    readonly generatedTemplateName: string;
    /**
    * The configuration details of the generated template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_generated_template#template_configuration CcGeneratedTemplate#template_configuration}
    */
    readonly templateConfiguration?: CcGeneratedTemplate.TemplateConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_generated_template awscc_cloudformation_generated_template}
*/
export class CcGeneratedTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_generated_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGeneratedTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGeneratedTemplate to import
    * @param importFromId The id of the existing CcGeneratedTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_generated_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGeneratedTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_generated_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_generated_template awscc_cloudformation_generated_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGeneratedTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcGeneratedTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_generated_template',
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
        this._generatedTemplateName = config.generatedTemplateName;
        this._templateConfiguration.internalValue = config.templateConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // generated_template_id - computed: true, optional: false, required: false
    public get generatedTemplateId() {
        return this.getStringAttribute('generated_template_id');
    }

    // generated_template_name - computed: false, optional: false, required: true
    private _generatedTemplateName?: string; 
    public get generatedTemplateName() {
        return this.getStringAttribute('generated_template_name');
    }
    public set generatedTemplateName(value: string) {
        this._generatedTemplateName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get generatedTemplateNameInput() {
        return this._generatedTemplateName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // progress - computed: true, optional: false, required: false
    private _progress = new CcGeneratedTemplate.ProgressPropertyOutputReference(this, "progress");
    public get progress() {
        return this._progress;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // template_configuration - computed: true, optional: true, required: false
    private _templateConfiguration = new CcGeneratedTemplate.TemplateConfigurationPropertyOutputReference(this, "template_configuration");
    public get templateConfiguration() {
        return this._templateConfiguration;
    }
    public putTemplateConfiguration(value: CcGeneratedTemplate.TemplateConfigurationProperty) {
        this._templateConfiguration.internalValue = value;
    }
    public resetTemplateConfiguration() {
        this._templateConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateConfigurationInput() {
        return this._templateConfiguration.internalValue;
    }

    // total_warnings - computed: true, optional: false, required: false
    public get totalWarnings() {
        return this.getNumberAttribute('total_warnings');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            generated_template_name: cdktn.stringToTerraform(this._generatedTemplateName),
            template_configuration: ccGeneratedTemplateTemplateConfigurationPropertyToTerraform(this._templateConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            generated_template_name: {
                value: cdktn.stringToHclTerraform(this._generatedTemplateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_configuration: {
                value: ccGeneratedTemplateTemplateConfigurationPropertyToHclTerraform(this._templateConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGeneratedTemplate.TemplateConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGeneratedTemplateProgressPropertyToTerraform(struct?: CcGeneratedTemplate.ProgressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccGeneratedTemplateProgressPropertyToHclTerraform(struct?: CcGeneratedTemplate.ProgressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccGeneratedTemplateTemplateConfigurationPropertyToTerraform(struct?: CcGeneratedTemplate.TemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deletion_policy: cdktn.stringToTerraform(struct!.deletionPolicy),
        update_replace_policy: cdktn.stringToTerraform(struct!.updateReplacePolicy),
    }
}


export function ccGeneratedTemplateTemplateConfigurationPropertyToHclTerraform(struct?: CcGeneratedTemplate.TemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deletion_policy: {
            value: cdktn.stringToHclTerraform(struct!.deletionPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_replace_policy: {
            value: cdktn.stringToHclTerraform(struct!.updateReplacePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGeneratedTemplate {
export interface ProgressProperty {
}
export class ProgressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProgressProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProgressProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // resources_failed - computed: true, optional: false, required: false
    public get resourcesFailed() {
        return this.getNumberAttribute('resources_failed');
    }

    // resources_pending - computed: true, optional: false, required: false
    public get resourcesPending() {
        return this.getNumberAttribute('resources_pending');
    }

    // resources_processing - computed: true, optional: false, required: false
    public get resourcesProcessing() {
        return this.getNumberAttribute('resources_processing');
    }

    // resources_succeeded - computed: true, optional: false, required: false
    public get resourcesSucceeded() {
        return this.getNumberAttribute('resources_succeeded');
    }
}
export interface TemplateConfigurationProperty {
    /**
    * The DeletionPolicy assigned to resources in the generated template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_generated_template#deletion_policy CcGeneratedTemplate#deletion_policy}
    */
    readonly deletionPolicy?: string;
    /**
    * The UpdateReplacePolicy assigned to resources in the generated template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_generated_template#update_replace_policy CcGeneratedTemplate#update_replace_policy}
    */
    readonly updateReplacePolicy?: string;
}
export class TemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TemplateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deletionPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.deletionPolicy = this._deletionPolicy;
        }
        if (this._updateReplacePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateReplacePolicy = this._updateReplacePolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deletionPolicy = undefined;
            this._updateReplacePolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deletionPolicy = value.deletionPolicy;
            this._updateReplacePolicy = value.updateReplacePolicy;
        }
    }

    // deletion_policy - computed: true, optional: true, required: false
    private _deletionPolicy?: string; 
    public get deletionPolicy() {
        return this.getStringAttribute('deletion_policy');
    }
    public set deletionPolicy(value: string) {
        this._deletionPolicy = value;
    }
    public resetDeletionPolicy() {
        this._deletionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionPolicyInput() {
        return this._deletionPolicy;
    }

    // update_replace_policy - computed: true, optional: true, required: false
    private _updateReplacePolicy?: string; 
    public get updateReplacePolicy() {
        return this.getStringAttribute('update_replace_policy');
    }
    public set updateReplacePolicy(value: string) {
        this._updateReplacePolicy = value;
    }
    public resetUpdateReplacePolicy() {
        this._updateReplacePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateReplacePolicyInput() {
        return this._updateReplacePolicy;
    }
}
}
