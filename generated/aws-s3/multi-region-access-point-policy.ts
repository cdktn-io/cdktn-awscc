// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMultiRegionAccessPointPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Multi Region Access Point to apply policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy#mrap_name CcMultiRegionAccessPointPolicy#mrap_name}
    */
    readonly mrapName: string;
    /**
    * Policy document to apply to a Multi Region Access Point
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy#policy CcMultiRegionAccessPointPolicy#policy}
    */
    readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy awscc_s3_multi_region_access_point_policy}
*/
export class CcMultiRegionAccessPointPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3_multi_region_access_point_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMultiRegionAccessPointPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMultiRegionAccessPointPolicy to import
    * @param importFromId The id of the existing CcMultiRegionAccessPointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMultiRegionAccessPointPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_multi_region_access_point_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy awscc_s3_multi_region_access_point_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMultiRegionAccessPointPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcMultiRegionAccessPointPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3_multi_region_access_point_policy',
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
        this._mrapName = config.mrapName;
        this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // mrap_name - computed: false, optional: false, required: true
    private _mrapName?: string; 
    public get mrapName() {
        return this.getStringAttribute('mrap_name');
    }
    public set mrapName(value: string) {
        this._mrapName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mrapNameInput() {
        return this._mrapName;
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // policy_status - computed: true, optional: false, required: false
    private _policyStatus = new CcMultiRegionAccessPointPolicy.PolicyStatusPropertyOutputReference(this, "policy_status");
    public get policyStatus() {
        return this._policyStatus;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            mrap_name: cdktn.stringToTerraform(this._mrapName),
            policy: cdktn.stringToTerraform(this._policy),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            mrap_name: {
                value: cdktn.stringToHclTerraform(this._mrapName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMultiRegionAccessPointPolicyPolicyStatusPropertyToTerraform(struct?: CcMultiRegionAccessPointPolicy.PolicyStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccMultiRegionAccessPointPolicyPolicyStatusPropertyToHclTerraform(struct?: CcMultiRegionAccessPointPolicy.PolicyStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcMultiRegionAccessPointPolicy {
export interface PolicyStatusProperty {
}
export class PolicyStatusPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyStatusProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyStatusProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // is_public - computed: true, optional: false, required: false
    public get isPublic() {
        return this.getStringAttribute('is_public');
    }
}
}
