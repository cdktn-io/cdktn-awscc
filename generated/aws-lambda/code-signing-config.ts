// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCodeSigningConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config#allowed_publishers CcCodeSigningConfig#allowed_publishers}
    */
    readonly allowedPublishers: CcCodeSigningConfig.AllowedPublishersProperty;
    /**
    * Policies to control how to act if a signature is invalid
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config#code_signing_policies CcCodeSigningConfig#code_signing_policies}
    */
    readonly codeSigningPolicies?: CcCodeSigningConfig.CodeSigningPoliciesProperty;
    /**
    * A description of the CodeSigningConfig
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config#description CcCodeSigningConfig#description}
    */
    readonly description?: string;
    /**
    * A list of tags to apply to CodeSigningConfig resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config#tags CcCodeSigningConfig#tags}
    */
    readonly tags?: CcCodeSigningConfig.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config awscc_lambda_code_signing_config}
*/
export class CcCodeSigningConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_code_signing_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCodeSigningConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCodeSigningConfig to import
    * @param importFromId The id of the existing CcCodeSigningConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCodeSigningConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_code_signing_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config awscc_lambda_code_signing_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCodeSigningConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcCodeSigningConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_code_signing_config',
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
        this._allowedPublishers.internalValue = config.allowedPublishers;
        this._codeSigningPolicies.internalValue = config.codeSigningPolicies;
        this._description = config.description;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_publishers - computed: false, optional: false, required: true
    private _allowedPublishers = new CcCodeSigningConfig.AllowedPublishersPropertyOutputReference(this, "allowed_publishers");
    public get allowedPublishers() {
        return this._allowedPublishers;
    }
    public putAllowedPublishers(value: CcCodeSigningConfig.AllowedPublishersProperty) {
        this._allowedPublishers.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedPublishersInput() {
        return this._allowedPublishers.internalValue;
    }

    // code_signing_config_arn - computed: true, optional: false, required: false
    public get codeSigningConfigArn() {
        return this.getStringAttribute('code_signing_config_arn');
    }

    // code_signing_config_id - computed: true, optional: false, required: false
    public get codeSigningConfigId() {
        return this.getStringAttribute('code_signing_config_id');
    }

    // code_signing_policies - computed: true, optional: true, required: false
    private _codeSigningPolicies = new CcCodeSigningConfig.CodeSigningPoliciesPropertyOutputReference(this, "code_signing_policies");
    public get codeSigningPolicies() {
        return this._codeSigningPolicies;
    }
    public putCodeSigningPolicies(value: CcCodeSigningConfig.CodeSigningPoliciesProperty) {
        this._codeSigningPolicies.internalValue = value;
    }
    public resetCodeSigningPolicies() {
        this._codeSigningPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeSigningPoliciesInput() {
        return this._codeSigningPolicies.internalValue;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCodeSigningConfig.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCodeSigningConfig.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            allowed_publishers: ccCodeSigningConfigAllowedPublishersPropertyToTerraform(this._allowedPublishers.internalValue),
            code_signing_policies: ccCodeSigningConfigCodeSigningPoliciesPropertyToTerraform(this._codeSigningPolicies.internalValue),
            description: cdktn.stringToTerraform(this._description),
            tags: cdktn.listMapper(ccCodeSigningConfigTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allowed_publishers: {
                value: ccCodeSigningConfigAllowedPublishersPropertyToHclTerraform(this._allowedPublishers.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCodeSigningConfig.AllowedPublishersProperty",
            },
            code_signing_policies: {
                value: ccCodeSigningConfigCodeSigningPoliciesPropertyToHclTerraform(this._codeSigningPolicies.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCodeSigningConfig.CodeSigningPoliciesProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCodeSigningConfigTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCodeSigningConfig.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCodeSigningConfigAllowedPublishersPropertyToTerraform(struct?: CcCodeSigningConfig.AllowedPublishersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        signing_profile_version_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.signingProfileVersionArns),
    }
}


export function ccCodeSigningConfigAllowedPublishersPropertyToHclTerraform(struct?: CcCodeSigningConfig.AllowedPublishersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        signing_profile_version_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.signingProfileVersionArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCodeSigningConfigCodeSigningPoliciesPropertyToTerraform(struct?: CcCodeSigningConfig.CodeSigningPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        untrusted_artifact_on_deployment: cdktn.stringToTerraform(struct!.untrustedArtifactOnDeployment),
    }
}


export function ccCodeSigningConfigCodeSigningPoliciesPropertyToHclTerraform(struct?: CcCodeSigningConfig.CodeSigningPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        untrusted_artifact_on_deployment: {
            value: cdktn.stringToHclTerraform(struct!.untrustedArtifactOnDeployment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCodeSigningConfigTagPropertyToTerraform(struct?: CcCodeSigningConfig.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCodeSigningConfigTagPropertyToHclTerraform(struct?: CcCodeSigningConfig.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCodeSigningConfig {
export interface AllowedPublishersProperty {
    /**
    * List of Signing profile version Arns
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config#signing_profile_version_arns CcCodeSigningConfig#signing_profile_version_arns}
    */
    readonly signingProfileVersionArns: string[];
}
export class AllowedPublishersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AllowedPublishersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._signingProfileVersionArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.signingProfileVersionArns = this._signingProfileVersionArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AllowedPublishersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._signingProfileVersionArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._signingProfileVersionArns = value.signingProfileVersionArns;
        }
    }

    // signing_profile_version_arns - computed: false, optional: false, required: true
    private _signingProfileVersionArns?: string[]; 
    public get signingProfileVersionArns() {
        return this.getListAttribute('signing_profile_version_arns');
    }
    public set signingProfileVersionArns(value: string[]) {
        this._signingProfileVersionArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get signingProfileVersionArnsInput() {
        return this._signingProfileVersionArns;
    }
}
export interface CodeSigningPoliciesProperty {
    /**
    * Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config#untrusted_artifact_on_deployment CcCodeSigningConfig#untrusted_artifact_on_deployment}
    */
    readonly untrustedArtifactOnDeployment?: string;
}
export class CodeSigningPoliciesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeSigningPoliciesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._untrustedArtifactOnDeployment !== undefined) {
            hasAnyValues = true;
            internalValueResult.untrustedArtifactOnDeployment = this._untrustedArtifactOnDeployment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeSigningPoliciesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._untrustedArtifactOnDeployment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._untrustedArtifactOnDeployment = value.untrustedArtifactOnDeployment;
        }
    }

    // untrusted_artifact_on_deployment - computed: true, optional: true, required: false
    private _untrustedArtifactOnDeployment?: string; 
    public get untrustedArtifactOnDeployment() {
        return this.getStringAttribute('untrusted_artifact_on_deployment');
    }
    public set untrustedArtifactOnDeployment(value: string) {
        this._untrustedArtifactOnDeployment = value;
    }
    public resetUntrustedArtifactOnDeployment() {
        this._untrustedArtifactOnDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get untrustedArtifactOnDeploymentInput() {
        return this._untrustedArtifactOnDeployment;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config#key CcCodeSigningConfig#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_code_signing_config#value CcCodeSigningConfig#value}
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
