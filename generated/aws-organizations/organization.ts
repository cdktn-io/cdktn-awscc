// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_organization

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOrganizationProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_organization#feature_set CcOrganization#feature_set}
    */
    readonly featureSet?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_organization awscc_organizations_organization}
*/
export class CcOrganization extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_organizations_organization";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOrganization resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOrganization to import
    * @param importFromId The id of the existing CcOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOrganization to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_organizations_organization", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_organization awscc_organizations_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOrganizationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcOrganizationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_organizations_organization',
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
        this._featureSet = config.featureSet;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // feature_set - computed: true, optional: true, required: false
    private _featureSet?: string; 
    public get featureSet() {
        return this.getStringAttribute('feature_set');
    }
    public set featureSet(value: string) {
        this._featureSet = value;
    }
    public resetFeatureSet() {
        this._featureSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featureSetInput() {
        return this._featureSet;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // management_account_arn - computed: true, optional: false, required: false
    public get managementAccountArn() {
        return this.getStringAttribute('management_account_arn');
    }

    // management_account_email - computed: true, optional: false, required: false
    public get managementAccountEmail() {
        return this.getStringAttribute('management_account_email');
    }

    // management_account_id - computed: true, optional: false, required: false
    public get managementAccountId() {
        return this.getStringAttribute('management_account_id');
    }

    // organization_id - computed: true, optional: false, required: false
    public get organizationId() {
        return this.getStringAttribute('organization_id');
    }

    // root_id - computed: true, optional: false, required: false
    public get rootId() {
        return this.getStringAttribute('root_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            feature_set: cdktn.stringToTerraform(this._featureSet),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            feature_set: {
                value: cdktn.stringToHclTerraform(this._featureSet),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcOrganization {
}
