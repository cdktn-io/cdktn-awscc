// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_lake_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataLakeAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the analytics data set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_lake_association#data_set_id CcDataLakeAssociation#data_set_id}
    */
    readonly dataSetId: string;
    /**
    * The identifier of the Amazon Connect instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_lake_association#instance_id CcDataLakeAssociation#instance_id}
    */
    readonly instanceId: string;
    /**
    * The identifier of the target account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_lake_association#target_account_id CcDataLakeAssociation#target_account_id}
    */
    readonly targetAccountId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_lake_association awscc_connect_data_lake_association}
*/
export class CcDataLakeAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_data_lake_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataLakeAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataLakeAssociation to import
    * @param importFromId The id of the existing CcDataLakeAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_lake_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataLakeAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_data_lake_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_lake_association awscc_connect_data_lake_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataLakeAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcDataLakeAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_data_lake_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._dataSetId = config.dataSetId;
        this._instanceId = config.instanceId;
        this._targetAccountId = config.targetAccountId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_set_id - computed: false, optional: false, required: true
    private _dataSetId?: string; 
    public get dataSetId() {
        return this.getStringAttribute('data_set_id');
    }
    public set dataSetId(value: string) {
        this._dataSetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSetIdInput() {
        return this._dataSetId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: false, required: true
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }

    // resource_share_arn - computed: true, optional: false, required: false
    public get resourceShareArn() {
        return this.getStringAttribute('resource_share_arn');
    }

    // resource_share_id - computed: true, optional: false, required: false
    public get resourceShareId() {
        return this.getStringAttribute('resource_share_id');
    }

    // target_account_id - computed: true, optional: true, required: false
    private _targetAccountId?: string; 
    public get targetAccountId() {
        return this.getStringAttribute('target_account_id');
    }
    public set targetAccountId(value: string) {
        this._targetAccountId = value;
    }
    public resetTargetAccountId() {
        this._targetAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetAccountIdInput() {
        return this._targetAccountId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_set_id: cdktn.stringToTerraform(this._dataSetId),
            instance_id: cdktn.stringToTerraform(this._instanceId),
            target_account_id: cdktn.stringToTerraform(this._targetAccountId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_set_id: {
                value: cdktn.stringToHclTerraform(this._dataSetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_id: {
                value: cdktn.stringToHclTerraform(this._instanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_account_id: {
                value: cdktn.stringToHclTerraform(this._targetAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcDataLakeAssociation {
}
