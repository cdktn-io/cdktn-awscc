// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_public_type_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPublicTypeVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Number (ARN) of the extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_public_type_version#arn CcPublicTypeVersion#arn}
    */
    readonly arn?: string;
    /**
    * A url to the S3 bucket where logs for the testType run will be available
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_public_type_version#log_delivery_bucket CcPublicTypeVersion#log_delivery_bucket}
    */
    readonly logDeliveryBucket?: string;
    /**
    * The version number of a public third-party extension
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_public_type_version#public_version_number CcPublicTypeVersion#public_version_number}
    */
    readonly publicVersionNumber?: string;
    /**
    * The kind of extension
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_public_type_version#type CcPublicTypeVersion#type}
    */
    readonly type?: string;
    /**
    * The name of the type being registered.
    * 
    * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_public_type_version#type_name CcPublicTypeVersion#type_name}
    */
    readonly typeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_public_type_version awscc_cloudformation_public_type_version}
*/
export class CcPublicTypeVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_public_type_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPublicTypeVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPublicTypeVersion to import
    * @param importFromId The id of the existing CcPublicTypeVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_public_type_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPublicTypeVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_public_type_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_public_type_version awscc_cloudformation_public_type_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPublicTypeVersionProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcPublicTypeVersionProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_public_type_version',
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
        this._arn = config.arn;
        this._logDeliveryBucket = config.logDeliveryBucket;
        this._publicVersionNumber = config.publicVersionNumber;
        this._type = config.type;
        this._typeName = config.typeName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_delivery_bucket - computed: true, optional: true, required: false
    private _logDeliveryBucket?: string; 
    public get logDeliveryBucket() {
        return this.getStringAttribute('log_delivery_bucket');
    }
    public set logDeliveryBucket(value: string) {
        this._logDeliveryBucket = value;
    }
    public resetLogDeliveryBucket() {
        this._logDeliveryBucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDeliveryBucketInput() {
        return this._logDeliveryBucket;
    }

    // public_type_arn - computed: true, optional: false, required: false
    public get publicTypeArn() {
        return this.getStringAttribute('public_type_arn');
    }

    // public_version_number - computed: true, optional: true, required: false
    private _publicVersionNumber?: string; 
    public get publicVersionNumber() {
        return this.getStringAttribute('public_version_number');
    }
    public set publicVersionNumber(value: string) {
        this._publicVersionNumber = value;
    }
    public resetPublicVersionNumber() {
        this._publicVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicVersionNumberInput() {
        return this._publicVersionNumber;
    }

    // publisher_id - computed: true, optional: false, required: false
    public get publisherId() {
        return this.getStringAttribute('publisher_id');
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // type_name - computed: true, optional: true, required: false
    private _typeName?: string; 
    public get typeName() {
        return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
        this._typeName = value;
    }
    public resetTypeName() {
        this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
        return this._typeName;
    }

    // type_version_arn - computed: true, optional: false, required: false
    public get typeVersionArn() {
        return this.getStringAttribute('type_version_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            arn: cdktn.stringToTerraform(this._arn),
            log_delivery_bucket: cdktn.stringToTerraform(this._logDeliveryBucket),
            public_version_number: cdktn.stringToTerraform(this._publicVersionNumber),
            type: cdktn.stringToTerraform(this._type),
            type_name: cdktn.stringToTerraform(this._typeName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            arn: {
                value: cdktn.stringToHclTerraform(this._arn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_delivery_bucket: {
                value: cdktn.stringToHclTerraform(this._logDeliveryBucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_version_number: {
                value: cdktn.stringToHclTerraform(this._publicVersionNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type_name: {
                value: cdktn.stringToHclTerraform(this._typeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPublicTypeVersion {
}
