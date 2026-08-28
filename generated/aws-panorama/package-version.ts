// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPackageVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether to mark the new version as the latest version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version#mark_latest CcPackageVersion#mark_latest}
    */
    readonly markLatest?: boolean | cdktn.IResolvable;
    /**
    * An owner account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version#owner_account CcPackageVersion#owner_account}
    */
    readonly ownerAccount?: string;
    /**
    * A package ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version#package_id CcPackageVersion#package_id}
    */
    readonly packageId: string;
    /**
    * A package version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version#package_version CcPackageVersion#package_version}
    */
    readonly packageVersion: string;
    /**
    * A patch version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version#patch_version CcPackageVersion#patch_version}
    */
    readonly patchVersion: string;
    /**
    * If the version was marked latest, the new version to maker as latest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version#updated_latest_patch_version CcPackageVersion#updated_latest_patch_version}
    */
    readonly updatedLatestPatchVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version awscc_panorama_package_version}
*/
export class CcPackageVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_panorama_package_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPackageVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPackageVersion to import
    * @param importFromId The id of the existing CcPackageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPackageVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_panorama_package_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/panorama_package_version awscc_panorama_package_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPackageVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcPackageVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_panorama_package_version',
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
        this._markLatest = config.markLatest;
        this._ownerAccount = config.ownerAccount;
        this._packageId = config.packageId;
        this._packageVersion = config.packageVersion;
        this._patchVersion = config.patchVersion;
        this._updatedLatestPatchVersion = config.updatedLatestPatchVersion;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_latest_patch - computed: true, optional: false, required: false
    public get isLatestPatch() {
        return this.getBooleanAttribute('is_latest_patch');
    }

    // mark_latest - computed: true, optional: true, required: false
    private _markLatest?: boolean | cdktn.IResolvable; 
    public get markLatest() {
        return this.getBooleanAttribute('mark_latest');
    }
    public set markLatest(value: boolean | cdktn.IResolvable) {
        this._markLatest = value;
    }
    public resetMarkLatest() {
        this._markLatest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get markLatestInput() {
        return this._markLatest;
    }

    // owner_account - computed: true, optional: true, required: false
    private _ownerAccount?: string; 
    public get ownerAccount() {
        return this.getStringAttribute('owner_account');
    }
    public set ownerAccount(value: string) {
        this._ownerAccount = value;
    }
    public resetOwnerAccount() {
        this._ownerAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerAccountInput() {
        return this._ownerAccount;
    }

    // package_arn - computed: true, optional: false, required: false
    public get packageArn() {
        return this.getStringAttribute('package_arn');
    }

    // package_id - computed: false, optional: false, required: true
    private _packageId?: string; 
    public get packageId() {
        return this.getStringAttribute('package_id');
    }
    public set packageId(value: string) {
        this._packageId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get packageIdInput() {
        return this._packageId;
    }

    // package_name - computed: true, optional: false, required: false
    public get packageName() {
        return this.getStringAttribute('package_name');
    }

    // package_version - computed: false, optional: false, required: true
    private _packageVersion?: string; 
    public get packageVersion() {
        return this.getStringAttribute('package_version');
    }
    public set packageVersion(value: string) {
        this._packageVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get packageVersionInput() {
        return this._packageVersion;
    }

    // patch_version - computed: false, optional: false, required: true
    private _patchVersion?: string; 
    public get patchVersion() {
        return this.getStringAttribute('patch_version');
    }
    public set patchVersion(value: string) {
        this._patchVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get patchVersionInput() {
        return this._patchVersion;
    }

    // registered_time - computed: true, optional: false, required: false
    public get registeredTime() {
        return this.getNumberAttribute('registered_time');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_description - computed: true, optional: false, required: false
    public get statusDescription() {
        return this.getStringAttribute('status_description');
    }

    // updated_latest_patch_version - computed: true, optional: true, required: false
    private _updatedLatestPatchVersion?: string; 
    public get updatedLatestPatchVersion() {
        return this.getStringAttribute('updated_latest_patch_version');
    }
    public set updatedLatestPatchVersion(value: string) {
        this._updatedLatestPatchVersion = value;
    }
    public resetUpdatedLatestPatchVersion() {
        this._updatedLatestPatchVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatedLatestPatchVersionInput() {
        return this._updatedLatestPatchVersion;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            mark_latest: cdktn.booleanToTerraform(this._markLatest),
            owner_account: cdktn.stringToTerraform(this._ownerAccount),
            package_id: cdktn.stringToTerraform(this._packageId),
            package_version: cdktn.stringToTerraform(this._packageVersion),
            patch_version: cdktn.stringToTerraform(this._patchVersion),
            updated_latest_patch_version: cdktn.stringToTerraform(this._updatedLatestPatchVersion),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            mark_latest: {
                value: cdktn.booleanToHclTerraform(this._markLatest),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            owner_account: {
                value: cdktn.stringToHclTerraform(this._ownerAccount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            package_id: {
                value: cdktn.stringToHclTerraform(this._packageId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            package_version: {
                value: cdktn.stringToHclTerraform(this._packageVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            patch_version: {
                value: cdktn.stringToHclTerraform(this._patchVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            updated_latest_patch_version: {
                value: cdktn.stringToHclTerraform(this._updatedLatestPatchVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPackageVersion {
}
