// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataTransformationProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest. If omitted, an AWS owned key is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#kms_key_id CcDataTransformationProfile#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * A human-readable description of the profile's purpose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#profile_description CcDataTransformationProfile#profile_description}
    */
    readonly profileDescription?: string;
    /**
    * The human-readable name of the profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#profile_name CcDataTransformationProfile#profile_name}
    */
    readonly profileName: string;
    /**
    * The source from which to create the profile's initial template content. Exactly one of the members must be specified. Use StarterProfile (C-CDA only), ProfileMapping (C-CDA or CSV), or ExistingVersionedProfileId to clone an existing profile. Each produces a published profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#source CcDataTransformationProfile#source}
    */
    readonly source?: CcDataTransformationProfile.SourceProperty;
    /**
    * The source format that this profile converts from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#source_format CcDataTransformationProfile#source_format}
    */
    readonly sourceFormat: string;
    /**
    * An array of key-value pairs to apply to this profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#tags CcDataTransformationProfile#tags}
    */
    readonly tags?: CcDataTransformationProfile.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}
*/
export class CcDataTransformationProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_healthlake_data_transformation_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataTransformationProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataTransformationProfile to import
    * @param importFromId The id of the existing CcDataTransformationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataTransformationProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_healthlake_data_transformation_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataTransformationProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcDataTransformationProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_healthlake_data_transformation_profile',
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
        this._kmsKeyId = config.kmsKeyId;
        this._profileDescription = config.profileDescription;
        this._profileName = config.profileName;
        this._source.internalValue = config.source;
        this._sourceFormat = config.sourceFormat;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // profile_description - computed: true, optional: true, required: false
    private _profileDescription?: string; 
    public get profileDescription() {
        return this.getStringAttribute('profile_description');
    }
    public set profileDescription(value: string) {
        this._profileDescription = value;
    }
    public resetProfileDescription() {
        this._profileDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileDescriptionInput() {
        return this._profileDescription;
    }

    // profile_id - computed: true, optional: false, required: false
    public get profileId() {
        return this.getStringAttribute('profile_id');
    }

    // profile_name - computed: false, optional: false, required: true
    private _profileName?: string; 
    public get profileName() {
        return this.getStringAttribute('profile_name');
    }
    public set profileName(value: string) {
        this._profileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileNameInput() {
        return this._profileName;
    }

    // source - computed: true, optional: true, required: false
    private _source = new CcDataTransformationProfile.SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: CcDataTransformationProfile.SourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // source_format - computed: false, optional: false, required: true
    private _sourceFormat?: string; 
    public get sourceFormat() {
        return this.getStringAttribute('source_format');
    }
    public set sourceFormat(value: string) {
        this._sourceFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFormatInput() {
        return this._sourceFormat;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataTransformationProfile.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataTransformationProfile.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_format - computed: true, optional: false, required: false
    public get targetFormat() {
        return this.getStringAttribute('target_format');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            profile_description: cdktn.stringToTerraform(this._profileDescription),
            profile_name: cdktn.stringToTerraform(this._profileName),
            source: ccDataTransformationProfileSourcePropertyToTerraform(this._source.internalValue),
            source_format: cdktn.stringToTerraform(this._sourceFormat),
            tags: cdktn.listMapper(ccDataTransformationProfileTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_description: {
                value: cdktn.stringToHclTerraform(this._profileDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_name: {
                value: cdktn.stringToHclTerraform(this._profileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: ccDataTransformationProfileSourcePropertyToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataTransformationProfile.SourceProperty",
            },
            source_format: {
                value: cdktn.stringToHclTerraform(this._sourceFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataTransformationProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDataTransformationProfile.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataTransformationProfileExistingVersionedProfileSourcePropertyToTerraform(struct?: CcDataTransformationProfile.ExistingVersionedProfileSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        profile_id: cdktn.stringToTerraform(struct!.profileId),
        version: cdktn.numberToTerraform(struct!.version),
    }
}


export function ccDataTransformationProfileExistingVersionedProfileSourcePropertyToHclTerraform(struct?: CcDataTransformationProfile.ExistingVersionedProfileSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        profile_id: {
            value: cdktn.stringToHclTerraform(struct!.profileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.numberToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataTransformationProfileProfileMappingSourcePropertyToTerraform(struct?: CcDataTransformationProfile.ProfileMappingSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        profile_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.profileMapping),
    }
}


export function ccDataTransformationProfileProfileMappingSourcePropertyToHclTerraform(struct?: CcDataTransformationProfile.ProfileMappingSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        profile_mapping: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.profileMapping),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataTransformationProfileStarterProfileSourcePropertyToTerraform(struct?: CcDataTransformationProfile.StarterProfileSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        starter_profile_name: cdktn.stringToTerraform(struct!.starterProfileName),
    }
}


export function ccDataTransformationProfileStarterProfileSourcePropertyToHclTerraform(struct?: CcDataTransformationProfile.StarterProfileSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        starter_profile_name: {
            value: cdktn.stringToHclTerraform(struct!.starterProfileName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataTransformationProfileSourcePropertyToTerraform(struct?: CcDataTransformationProfile.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        existing_versioned_profile_id: ccDataTransformationProfileExistingVersionedProfileSourcePropertyToTerraform(struct!.existingVersionedProfileId),
        profile_mapping: ccDataTransformationProfileProfileMappingSourcePropertyToTerraform(struct!.profileMapping),
        starter_profile: ccDataTransformationProfileStarterProfileSourcePropertyToTerraform(struct!.starterProfile),
    }
}


export function ccDataTransformationProfileSourcePropertyToHclTerraform(struct?: CcDataTransformationProfile.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        existing_versioned_profile_id: {
            value: ccDataTransformationProfileExistingVersionedProfileSourcePropertyToHclTerraform(struct!.existingVersionedProfileId),
            isBlock: true,
            type: "struct",
            storageClassType: "ExistingVersionedProfileSourceProperty",
        },
        profile_mapping: {
            value: ccDataTransformationProfileProfileMappingSourcePropertyToHclTerraform(struct!.profileMapping),
            isBlock: true,
            type: "struct",
            storageClassType: "ProfileMappingSourceProperty",
        },
        starter_profile: {
            value: ccDataTransformationProfileStarterProfileSourcePropertyToHclTerraform(struct!.starterProfile),
            isBlock: true,
            type: "struct",
            storageClassType: "StarterProfileSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataTransformationProfileTagPropertyToTerraform(struct?: CcDataTransformationProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataTransformationProfileTagPropertyToHclTerraform(struct?: CcDataTransformationProfile.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDataTransformationProfile {
export interface ExistingVersionedProfileSourceProperty {
    /**
    * The unique identifier of the source profile to clone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#profile_id CcDataTransformationProfile#profile_id}
    */
    readonly profileId?: string;
    /**
    * The version number of the source profile to clone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#version CcDataTransformationProfile#version}
    */
    readonly version?: number;
}
export class ExistingVersionedProfileSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExistingVersionedProfileSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._profileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileId = this._profileId;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExistingVersionedProfileSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._profileId = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._profileId = value.profileId;
            this._version = value.version;
        }
    }

    // profile_id - computed: true, optional: true, required: false
    private _profileId?: string; 
    public get profileId() {
        return this.getStringAttribute('profile_id');
    }
    public set profileId(value: string) {
        this._profileId = value;
    }
    public resetProfileId() {
        this._profileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileIdInput() {
        return this._profileId;
    }

    // version - computed: true, optional: true, required: false
    private _version?: number; 
    public get version() {
        return this.getNumberAttribute('version');
    }
    public set version(value: number) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface ProfileMappingSourceProperty {
    /**
    * Map of template file paths to their Velocity template content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#profile_mapping CcDataTransformationProfile#profile_mapping}
    */
    readonly profileMapping?: { [key: string]: string };
}
export class ProfileMappingSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProfileMappingSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._profileMapping !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileMapping = this._profileMapping;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProfileMappingSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._profileMapping = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._profileMapping = value.profileMapping;
        }
    }

    // profile_mapping - computed: true, optional: true, required: false
    private _profileMapping?: { [key: string]: string }; 
    public get profileMapping() {
        return this.getStringMapAttribute('profile_mapping');
    }
    public set profileMapping(value: { [key: string]: string }) {
        this._profileMapping = value;
    }
    public resetProfileMapping() {
        this._profileMapping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileMappingInput() {
        return this._profileMapping;
    }
}
export interface StarterProfileSourceProperty {
    /**
    * The name of the starter profile to seed the profile from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#starter_profile_name CcDataTransformationProfile#starter_profile_name}
    */
    readonly starterProfileName?: string;
}
export class StarterProfileSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StarterProfileSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._starterProfileName !== undefined) {
            hasAnyValues = true;
            internalValueResult.starterProfileName = this._starterProfileName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StarterProfileSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._starterProfileName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._starterProfileName = value.starterProfileName;
        }
    }

    // starter_profile_name - computed: true, optional: true, required: false
    private _starterProfileName?: string; 
    public get starterProfileName() {
        return this.getStringAttribute('starter_profile_name');
    }
    public set starterProfileName(value: string) {
        this._starterProfileName = value;
    }
    public resetStarterProfileName() {
        this._starterProfileName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get starterProfileNameInput() {
        return this._starterProfileName;
    }
}
export interface SourceProperty {
    /**
    * Create the profile by cloning a specific version of an existing profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#existing_versioned_profile_id CcDataTransformationProfile#existing_versioned_profile_id}
    */
    readonly existingVersionedProfileId?: ExistingVersionedProfileSourceProperty;
    /**
    * Create the profile from raw Velocity template mapping content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#profile_mapping CcDataTransformationProfile#profile_mapping}
    */
    readonly profileMapping?: ProfileMappingSourceProperty;
    /**
    * Create the profile from a predefined starter profile of transformation templates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#starter_profile CcDataTransformationProfile#starter_profile}
    */
    readonly starterProfile?: StarterProfileSourceProperty;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._existingVersionedProfileId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.existingVersionedProfileId = this._existingVersionedProfileId?.internalValue;
        }
        if (this._profileMapping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileMapping = this._profileMapping?.internalValue;
        }
        if (this._starterProfile?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.starterProfile = this._starterProfile?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._existingVersionedProfileId.internalValue = undefined;
            this._profileMapping.internalValue = undefined;
            this._starterProfile.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._existingVersionedProfileId.internalValue = value.existingVersionedProfileId;
            this._profileMapping.internalValue = value.profileMapping;
            this._starterProfile.internalValue = value.starterProfile;
        }
    }

    // existing_versioned_profile_id - computed: true, optional: true, required: false
    private _existingVersionedProfileId = new ExistingVersionedProfileSourcePropertyOutputReference(this, "existing_versioned_profile_id");
    public get existingVersionedProfileId() {
        return this._existingVersionedProfileId;
    }
    public putExistingVersionedProfileId(value: ExistingVersionedProfileSourceProperty) {
        this._existingVersionedProfileId.internalValue = value;
    }
    public resetExistingVersionedProfileId() {
        this._existingVersionedProfileId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get existingVersionedProfileIdInput() {
        return this._existingVersionedProfileId.internalValue;
    }

    // profile_mapping - computed: true, optional: true, required: false
    private _profileMapping = new ProfileMappingSourcePropertyOutputReference(this, "profile_mapping");
    public get profileMapping() {
        return this._profileMapping;
    }
    public putProfileMapping(value: ProfileMappingSourceProperty) {
        this._profileMapping.internalValue = value;
    }
    public resetProfileMapping() {
        this._profileMapping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileMappingInput() {
        return this._profileMapping.internalValue;
    }

    // starter_profile - computed: true, optional: true, required: false
    private _starterProfile = new StarterProfileSourcePropertyOutputReference(this, "starter_profile");
    public get starterProfile() {
        return this._starterProfile;
    }
    public putStarterProfile(value: StarterProfileSourceProperty) {
        this._starterProfile.internalValue = value;
    }
    public resetStarterProfile() {
        this._starterProfile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get starterProfileInput() {
        return this._starterProfile.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#key CcDataTransformationProfile#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthlake_data_transformation_profile#value CcDataTransformationProfile#value}
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
