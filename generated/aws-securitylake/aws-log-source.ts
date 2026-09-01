// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_aws_log_source

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAwsLogSourceProps extends cdktn.TerraformMetaArguments {
    /**
    * AWS account where you want to collect logs from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_aws_log_source#accounts CcAwsLogSource#accounts}
    */
    readonly accounts?: string[];
    /**
    * The ARN for the data lake.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_aws_log_source#data_lake_arn CcAwsLogSource#data_lake_arn}
    */
    readonly dataLakeArn: string;
    /**
    * The name for a AWS source. This must be a Regionally unique value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_aws_log_source#source_name CcAwsLogSource#source_name}
    */
    readonly sourceName: string;
    /**
    * The version for a AWS source. This must be a Regionally unique value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_aws_log_source#source_version CcAwsLogSource#source_version}
    */
    readonly sourceVersion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_aws_log_source awscc_securitylake_aws_log_source}
*/
export class CcAwsLogSource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securitylake_aws_log_source";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAwsLogSource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAwsLogSource to import
    * @param importFromId The id of the existing CcAwsLogSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_aws_log_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAwsLogSource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securitylake_aws_log_source", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_aws_log_source awscc_securitylake_aws_log_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAwsLogSourceProps
    */
    public constructor(scope: Construct, id: string, config: CcAwsLogSourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securitylake_aws_log_source',
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
        this._accounts = config.accounts;
        this._dataLakeArn = config.dataLakeArn;
        this._sourceName = config.sourceName;
        this._sourceVersion = config.sourceVersion;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accounts - computed: true, optional: true, required: false
    private _accounts?: string[]; 
    public get accounts() {
        return cdktn.Fn.tolist(this.getListAttribute('accounts'));
    }
    public set accounts(value: string[]) {
        this._accounts = value;
    }
    public resetAccounts() {
        this._accounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountsInput() {
        return this._accounts;
    }

    // data_lake_arn - computed: false, optional: false, required: true
    private _dataLakeArn?: string; 
    public get dataLakeArn() {
        return this.getStringAttribute('data_lake_arn');
    }
    public set dataLakeArn(value: string) {
        this._dataLakeArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataLakeArnInput() {
        return this._dataLakeArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // source_name - computed: false, optional: false, required: true
    private _sourceName?: string; 
    public get sourceName() {
        return this.getStringAttribute('source_name');
    }
    public set sourceName(value: string) {
        this._sourceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceNameInput() {
        return this._sourceName;
    }

    // source_version - computed: false, optional: false, required: true
    private _sourceVersion?: string; 
    public get sourceVersion() {
        return this.getStringAttribute('source_version');
    }
    public set sourceVersion(value: string) {
        this._sourceVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceVersionInput() {
        return this._sourceVersion;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._accounts),
            data_lake_arn: cdktn.stringToTerraform(this._dataLakeArn),
            source_name: cdktn.stringToTerraform(this._sourceName),
            source_version: cdktn.stringToTerraform(this._sourceVersion),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accounts: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._accounts),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            data_lake_arn: {
                value: cdktn.stringToHclTerraform(this._dataLakeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_name: {
                value: cdktn.stringToHclTerraform(this._sourceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_version: {
                value: cdktn.stringToHclTerraform(this._sourceVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAwsLogSource {
}
