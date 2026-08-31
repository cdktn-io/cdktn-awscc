// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResolverConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Represents the desired status of AutodefinedReverse. The only supported value on creation is DISABLE. Deletion of this resource will return AutodefinedReverse to its default value (ENABLED).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_config#autodefined_reverse_flag CcResolverConfig#autodefined_reverse_flag}
    */
    readonly autodefinedReverseFlag: string;
    /**
    * ResourceId
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_config#resource_id CcResolverConfig#resource_id}
    */
    readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_config awscc_route53resolver_resolver_config}
*/
export class CcResolverConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53resolver_resolver_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResolverConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResolverConfig to import
    * @param importFromId The id of the existing CcResolverConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResolverConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_resolver_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_config awscc_route53resolver_resolver_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResolverConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcResolverConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53resolver_resolver_config',
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
        this._autodefinedReverseFlag = config.autodefinedReverseFlag;
        this._resourceId = config.resourceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // autodefined_reverse - computed: true, optional: false, required: false
    public get autodefinedReverse() {
        return this.getStringAttribute('autodefined_reverse');
    }

    // autodefined_reverse_flag - computed: false, optional: false, required: true
    private _autodefinedReverseFlag?: string; 
    public get autodefinedReverseFlag() {
        return this.getStringAttribute('autodefined_reverse_flag');
    }
    public set autodefinedReverseFlag(value: string) {
        this._autodefinedReverseFlag = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autodefinedReverseFlagInput() {
        return this._autodefinedReverseFlag;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // resolver_config_id - computed: true, optional: false, required: false
    public get resolverConfigId() {
        return this.getStringAttribute('resolver_config_id');
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            autodefined_reverse_flag: cdktn.stringToTerraform(this._autodefinedReverseFlag),
            resource_id: cdktn.stringToTerraform(this._resourceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            autodefined_reverse_flag: {
                value: cdktn.stringToHclTerraform(this._autodefinedReverseFlag),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_id: {
                value: cdktn.stringToHclTerraform(this._resourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcResolverConfig {
}
