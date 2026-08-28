// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_key_signing_key

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcKeySigningKeyProps extends cdktn.TerraformMetaArguments {
    /**
    * The unique string (ID) used to identify a hosted zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_key_signing_key#hosted_zone_id CcKeySigningKey#hosted_zone_id}
    */
    readonly hostedZoneId: string;
    /**
    * The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_key_signing_key#key_management_service_arn CcKeySigningKey#key_management_service_arn}
    */
    readonly keyManagementServiceArn: string;
    /**
    * An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_key_signing_key#name CcKeySigningKey#name}
    */
    readonly name: string;
    /**
    * A string specifying the initial status of the key signing key (KSK). You can set the value to ACTIVE or INACTIVE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_key_signing_key#status CcKeySigningKey#status}
    */
    readonly status: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_key_signing_key awscc_route53_key_signing_key}
*/
export class CcKeySigningKey extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53_key_signing_key";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcKeySigningKey resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcKeySigningKey to import
    * @param importFromId The id of the existing CcKeySigningKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_key_signing_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcKeySigningKey to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_key_signing_key", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_key_signing_key awscc_route53_key_signing_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcKeySigningKeyProps
    */
    public constructor(scope: Construct, id: string, config: CcKeySigningKeyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53_key_signing_key',
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
        this._hostedZoneId = config.hostedZoneId;
        this._keyManagementServiceArn = config.keyManagementServiceArn;
        this._name = config.name;
        this._status = config.status;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // hosted_zone_id - computed: false, optional: false, required: true
    private _hostedZoneId?: string; 
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string) {
        this._hostedZoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
        return this._hostedZoneId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key_management_service_arn - computed: false, optional: false, required: true
    private _keyManagementServiceArn?: string; 
    public get keyManagementServiceArn() {
        return this.getStringAttribute('key_management_service_arn');
    }
    public set keyManagementServiceArn(value: string) {
        this._keyManagementServiceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyManagementServiceArnInput() {
        return this._keyManagementServiceArn;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // status - computed: false, optional: false, required: true
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            hosted_zone_id: cdktn.stringToTerraform(this._hostedZoneId),
            key_management_service_arn: cdktn.stringToTerraform(this._keyManagementServiceArn),
            name: cdktn.stringToTerraform(this._name),
            status: cdktn.stringToTerraform(this._status),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            hosted_zone_id: {
                value: cdktn.stringToHclTerraform(this._hostedZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_management_service_arn: {
                value: cdktn.stringToHclTerraform(this._keyManagementServiceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcKeySigningKey {
}
