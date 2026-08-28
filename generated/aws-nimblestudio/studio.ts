// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStudioProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio#admin_role_arn CcStudio#admin_role_arn}
    */
    readonly adminRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio#display_name CcStudio#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio#studio_encryption_configuration CcStudio#studio_encryption_configuration}
    */
    readonly studioEncryptionConfiguration?: CcStudio.StudioEncryptionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio#studio_name CcStudio#studio_name}
    */
    readonly studioName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio#tags CcStudio#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio#user_role_arn CcStudio#user_role_arn}
    */
    readonly userRoleArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio awscc_nimblestudio_studio}
*/
export class CcStudio extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_nimblestudio_studio";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStudio resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStudio to import
    * @param importFromId The id of the existing CcStudio that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStudio to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_nimblestudio_studio", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio awscc_nimblestudio_studio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStudioProps
    */
    public constructor(scope: Construct, id: string, config: CcStudioProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_nimblestudio_studio',
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
        this._adminRoleArn = config.adminRoleArn;
        this._displayName = config.displayName;
        this._studioEncryptionConfiguration.internalValue = config.studioEncryptionConfiguration;
        this._studioName = config.studioName;
        this._tags = config.tags;
        this._userRoleArn = config.userRoleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // admin_role_arn - computed: false, optional: false, required: true
    private _adminRoleArn?: string; 
    public get adminRoleArn() {
        return this.getStringAttribute('admin_role_arn');
    }
    public set adminRoleArn(value: string) {
        this._adminRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get adminRoleArnInput() {
        return this._adminRoleArn;
    }

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // home_region - computed: true, optional: false, required: false
    public get homeRegion() {
        return this.getStringAttribute('home_region');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // sso_client_id - computed: true, optional: false, required: false
    public get ssoClientId() {
        return this.getStringAttribute('sso_client_id');
    }

    // studio_encryption_configuration - computed: true, optional: true, required: false
    private _studioEncryptionConfiguration = new CcStudio.StudioEncryptionConfigurationPropertyOutputReference(this, "studio_encryption_configuration");
    public get studioEncryptionConfiguration() {
        return this._studioEncryptionConfiguration;
    }
    public putStudioEncryptionConfiguration(value: CcStudio.StudioEncryptionConfigurationProperty) {
        this._studioEncryptionConfiguration.internalValue = value;
    }
    public resetStudioEncryptionConfiguration() {
        this._studioEncryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get studioEncryptionConfigurationInput() {
        return this._studioEncryptionConfiguration.internalValue;
    }

    // studio_id - computed: true, optional: false, required: false
    public get studioId() {
        return this.getStringAttribute('studio_id');
    }

    // studio_name - computed: false, optional: false, required: true
    private _studioName?: string; 
    public get studioName() {
        return this.getStringAttribute('studio_name');
    }
    public set studioName(value: string) {
        this._studioName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get studioNameInput() {
        return this._studioName;
    }

    // studio_url - computed: true, optional: false, required: false
    public get studioUrl() {
        return this.getStringAttribute('studio_url');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // user_role_arn - computed: false, optional: false, required: true
    private _userRoleArn?: string; 
    public get userRoleArn() {
        return this.getStringAttribute('user_role_arn');
    }
    public set userRoleArn(value: string) {
        this._userRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userRoleArnInput() {
        return this._userRoleArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            admin_role_arn: cdktn.stringToTerraform(this._adminRoleArn),
            display_name: cdktn.stringToTerraform(this._displayName),
            studio_encryption_configuration: ccStudioStudioEncryptionConfigurationPropertyToTerraform(this._studioEncryptionConfiguration.internalValue),
            studio_name: cdktn.stringToTerraform(this._studioName),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            user_role_arn: cdktn.stringToTerraform(this._userRoleArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            admin_role_arn: {
                value: cdktn.stringToHclTerraform(this._adminRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            studio_encryption_configuration: {
                value: ccStudioStudioEncryptionConfigurationPropertyToHclTerraform(this._studioEncryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStudio.StudioEncryptionConfigurationProperty",
            },
            studio_name: {
                value: cdktn.stringToHclTerraform(this._studioName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            user_role_arn: {
                value: cdktn.stringToHclTerraform(this._userRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStudioStudioEncryptionConfigurationPropertyToTerraform(struct?: CcStudio.StudioEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_arn: cdktn.stringToTerraform(struct!.keyArn),
        key_type: cdktn.stringToTerraform(struct!.keyType),
    }
}


export function ccStudioStudioEncryptionConfigurationPropertyToHclTerraform(struct?: CcStudio.StudioEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_arn: {
            value: cdktn.stringToHclTerraform(struct!.keyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_type: {
            value: cdktn.stringToHclTerraform(struct!.keyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcStudio {
export interface StudioEncryptionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio#key_arn CcStudio#key_arn}
    */
    readonly keyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/nimblestudio_studio#key_type CcStudio#key_type}
    */
    readonly keyType?: string;
}
export class StudioEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StudioEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyArn = this._keyArn;
        }
        if (this._keyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyType = this._keyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StudioEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyArn = undefined;
            this._keyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyArn = value.keyArn;
            this._keyType = value.keyType;
        }
    }

    // key_arn - computed: true, optional: true, required: false
    private _keyArn?: string; 
    public get keyArn() {
        return this.getStringAttribute('key_arn');
    }
    public set keyArn(value: string) {
        this._keyArn = value;
    }
    public resetKeyArn() {
        this._keyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyArnInput() {
        return this._keyArn;
    }

    // key_type - computed: true, optional: true, required: false
    private _keyType?: string; 
    public get keyType() {
        return this.getStringAttribute('key_type');
    }
    public set keyType(value: string) {
        this._keyType = value;
    }
    public resetKeyType() {
        this._keyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyTypeInput() {
        return this._keyType;
    }
}
}
