// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLaunchConfigurationTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * Copy private IP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#copy_private_ip CcLaunchConfigurationTemplate#copy_private_ip}
    */
    readonly copyPrivateIp?: boolean | cdktn.IResolvable;
    /**
    * Copy tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#copy_tags CcLaunchConfigurationTemplate#copy_tags}
    */
    readonly copyTags?: boolean | cdktn.IResolvable;
    /**
    * S3 bucket ARN to export Source Network templates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#export_bucket_arn CcLaunchConfigurationTemplate#export_bucket_arn}
    */
    readonly exportBucketArn?: string;
    /**
    * Launch disposition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#launch_disposition CcLaunchConfigurationTemplate#launch_disposition}
    */
    readonly launchDisposition?: string;
    /**
    * DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#launch_into_source_instance CcLaunchConfigurationTemplate#launch_into_source_instance}
    */
    readonly launchIntoSourceInstance?: boolean | cdktn.IResolvable;
    /**
    * Configuration of a machine's license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#licensing CcLaunchConfigurationTemplate#licensing}
    */
    readonly licensing?: CcLaunchConfigurationTemplate.LicensingProperty;
    /**
    * Whether we want to activate post-launch actions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#post_launch_enabled CcLaunchConfigurationTemplate#post_launch_enabled}
    */
    readonly postLaunchEnabled?: boolean | cdktn.IResolvable;
    /**
    * A set of tags associated with the Launch Configuration Template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#tags CcLaunchConfigurationTemplate#tags}
    */
    readonly tags?: CcLaunchConfigurationTemplate.TagsProperty[] | cdktn.IResolvable;
    /**
    * Target instance type right-sizing method.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#target_instance_type_right_sizing_method CcLaunchConfigurationTemplate#target_instance_type_right_sizing_method}
    */
    readonly targetInstanceTypeRightSizingMethod?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template awscc_drs_launch_configuration_template}
*/
export class CcLaunchConfigurationTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_drs_launch_configuration_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLaunchConfigurationTemplate to import
    * @param importFromId The id of the existing CcLaunchConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLaunchConfigurationTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_drs_launch_configuration_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template awscc_drs_launch_configuration_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLaunchConfigurationTemplateProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcLaunchConfigurationTemplateProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_drs_launch_configuration_template',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._copyPrivateIp = config.copyPrivateIp;
        this._copyTags = config.copyTags;
        this._exportBucketArn = config.exportBucketArn;
        this._launchDisposition = config.launchDisposition;
        this._launchIntoSourceInstance = config.launchIntoSourceInstance;
        this._licensing.internalValue = config.licensing;
        this._postLaunchEnabled = config.postLaunchEnabled;
        this._tags.internalValue = config.tags;
        this._targetInstanceTypeRightSizingMethod = config.targetInstanceTypeRightSizingMethod;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // copy_private_ip - computed: true, optional: true, required: false
    private _copyPrivateIp?: boolean | cdktn.IResolvable; 
    public get copyPrivateIp() {
        return this.getBooleanAttribute('copy_private_ip');
    }
    public set copyPrivateIp(value: boolean | cdktn.IResolvable) {
        this._copyPrivateIp = value;
    }
    public resetCopyPrivateIp() {
        this._copyPrivateIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyPrivateIpInput() {
        return this._copyPrivateIp;
    }

    // copy_tags - computed: true, optional: true, required: false
    private _copyTags?: boolean | cdktn.IResolvable; 
    public get copyTags() {
        return this.getBooleanAttribute('copy_tags');
    }
    public set copyTags(value: boolean | cdktn.IResolvable) {
        this._copyTags = value;
    }
    public resetCopyTags() {
        this._copyTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsInput() {
        return this._copyTags;
    }

    // export_bucket_arn - computed: true, optional: true, required: false
    private _exportBucketArn?: string; 
    public get exportBucketArn() {
        return this.getStringAttribute('export_bucket_arn');
    }
    public set exportBucketArn(value: string) {
        this._exportBucketArn = value;
    }
    public resetExportBucketArn() {
        this._exportBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportBucketArnInput() {
        return this._exportBucketArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // launch_configuration_template_id - computed: true, optional: false, required: false
    public get launchConfigurationTemplateId() {
        return this.getStringAttribute('launch_configuration_template_id');
    }

    // launch_disposition - computed: true, optional: true, required: false
    private _launchDisposition?: string; 
    public get launchDisposition() {
        return this.getStringAttribute('launch_disposition');
    }
    public set launchDisposition(value: string) {
        this._launchDisposition = value;
    }
    public resetLaunchDisposition() {
        this._launchDisposition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchDispositionInput() {
        return this._launchDisposition;
    }

    // launch_into_source_instance - computed: true, optional: true, required: false
    private _launchIntoSourceInstance?: boolean | cdktn.IResolvable; 
    public get launchIntoSourceInstance() {
        return this.getBooleanAttribute('launch_into_source_instance');
    }
    public set launchIntoSourceInstance(value: boolean | cdktn.IResolvable) {
        this._launchIntoSourceInstance = value;
    }
    public resetLaunchIntoSourceInstance() {
        this._launchIntoSourceInstance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchIntoSourceInstanceInput() {
        return this._launchIntoSourceInstance;
    }

    // licensing - computed: true, optional: true, required: false
    private _licensing = new CcLaunchConfigurationTemplate.LicensingPropertyOutputReference(this, "licensing");
    public get licensing() {
        return this._licensing;
    }
    public putLicensing(value: CcLaunchConfigurationTemplate.LicensingProperty) {
        this._licensing.internalValue = value;
    }
    public resetLicensing() {
        this._licensing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licensingInput() {
        return this._licensing.internalValue;
    }

    // post_launch_enabled - computed: true, optional: true, required: false
    private _postLaunchEnabled?: boolean | cdktn.IResolvable; 
    public get postLaunchEnabled() {
        return this.getBooleanAttribute('post_launch_enabled');
    }
    public set postLaunchEnabled(value: boolean | cdktn.IResolvable) {
        this._postLaunchEnabled = value;
    }
    public resetPostLaunchEnabled() {
        this._postLaunchEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postLaunchEnabledInput() {
        return this._postLaunchEnabled;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLaunchConfigurationTemplate.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLaunchConfigurationTemplate.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_instance_type_right_sizing_method - computed: true, optional: true, required: false
    private _targetInstanceTypeRightSizingMethod?: string; 
    public get targetInstanceTypeRightSizingMethod() {
        return this.getStringAttribute('target_instance_type_right_sizing_method');
    }
    public set targetInstanceTypeRightSizingMethod(value: string) {
        this._targetInstanceTypeRightSizingMethod = value;
    }
    public resetTargetInstanceTypeRightSizingMethod() {
        this._targetInstanceTypeRightSizingMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInstanceTypeRightSizingMethodInput() {
        return this._targetInstanceTypeRightSizingMethod;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            copy_private_ip: cdktn.booleanToTerraform(this._copyPrivateIp),
            copy_tags: cdktn.booleanToTerraform(this._copyTags),
            export_bucket_arn: cdktn.stringToTerraform(this._exportBucketArn),
            launch_disposition: cdktn.stringToTerraform(this._launchDisposition),
            launch_into_source_instance: cdktn.booleanToTerraform(this._launchIntoSourceInstance),
            licensing: ccLaunchConfigurationTemplateLicensingPropertyToTerraform(this._licensing.internalValue),
            post_launch_enabled: cdktn.booleanToTerraform(this._postLaunchEnabled),
            tags: cdktn.listMapper(ccLaunchConfigurationTemplateTagsPropertyToTerraform, false)(this._tags.internalValue),
            target_instance_type_right_sizing_method: cdktn.stringToTerraform(this._targetInstanceTypeRightSizingMethod),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            copy_private_ip: {
                value: cdktn.booleanToHclTerraform(this._copyPrivateIp),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            copy_tags: {
                value: cdktn.booleanToHclTerraform(this._copyTags),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            export_bucket_arn: {
                value: cdktn.stringToHclTerraform(this._exportBucketArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            launch_disposition: {
                value: cdktn.stringToHclTerraform(this._launchDisposition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            launch_into_source_instance: {
                value: cdktn.booleanToHclTerraform(this._launchIntoSourceInstance),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            licensing: {
                value: ccLaunchConfigurationTemplateLicensingPropertyToHclTerraform(this._licensing.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLaunchConfigurationTemplate.LicensingProperty",
            },
            post_launch_enabled: {
                value: cdktn.booleanToHclTerraform(this._postLaunchEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLaunchConfigurationTemplateTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLaunchConfigurationTemplate.TagsPropertyList",
            },
            target_instance_type_right_sizing_method: {
                value: cdktn.stringToHclTerraform(this._targetInstanceTypeRightSizingMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLaunchConfigurationTemplateLicensingPropertyToTerraform(struct?: CcLaunchConfigurationTemplate.LicensingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        os_byol: cdktn.booleanToTerraform(struct!.osByol),
    }
}


export function ccLaunchConfigurationTemplateLicensingPropertyToHclTerraform(struct?: CcLaunchConfigurationTemplate.LicensingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        os_byol: {
            value: cdktn.booleanToHclTerraform(struct!.osByol),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchConfigurationTemplateTagsPropertyToTerraform(struct?: CcLaunchConfigurationTemplate.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLaunchConfigurationTemplateTagsPropertyToHclTerraform(struct?: CcLaunchConfigurationTemplate.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcLaunchConfigurationTemplate {
export interface LicensingProperty {
    /**
    * Whether to enable Bring your own license or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#os_byol CcLaunchConfigurationTemplate#os_byol}
    */
    readonly osByol?: boolean | cdktn.IResolvable;
}
export class LicensingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LicensingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._osByol !== undefined) {
            hasAnyValues = true;
            internalValueResult.osByol = this._osByol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicensingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._osByol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._osByol = value.osByol;
        }
    }

    // os_byol - computed: true, optional: true, required: false
    private _osByol?: boolean | cdktn.IResolvable; 
    public get osByol() {
        return this.getBooleanAttribute('os_byol');
    }
    public set osByol(value: boolean | cdktn.IResolvable) {
        this._osByol = value;
    }
    public resetOsByol() {
        this._osByol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get osByolInput() {
        return this._osByol;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#key CcLaunchConfigurationTemplate#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#value CcLaunchConfigurationTemplate#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
