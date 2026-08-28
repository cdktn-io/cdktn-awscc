// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_aggregator_v2

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAggregatorV2Props extends cdktn.TerraformMetaArguments {
    /**
    * The list of included Regions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_aggregator_v2#linked_regions CcAggregatorV2#linked_regions}
    */
    readonly linkedRegions: string[];
    /**
    * Indicates to link a list of included Regions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_aggregator_v2#region_linking_mode CcAggregatorV2#region_linking_mode}
    */
    readonly regionLinkingMode: string;
    /**
    * A key-value pair to associate with the Security Hub V2 resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_aggregator_v2#tags CcAggregatorV2#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_aggregator_v2 awscc_securityhub_aggregator_v2}
*/
export class CcAggregatorV2 extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_aggregator_v2";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAggregatorV2 resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAggregatorV2 to import
    * @param importFromId The id of the existing CcAggregatorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_aggregator_v2#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAggregatorV2 to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_aggregator_v2", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_aggregator_v2 awscc_securityhub_aggregator_v2} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAggregatorV2Props
    */
    public constructor(scope: Construct, id: string, config: CcAggregatorV2Props) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_aggregator_v2',
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
        this._linkedRegions = config.linkedRegions;
        this._regionLinkingMode = config.regionLinkingMode;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aggregation_region - computed: true, optional: false, required: false
    public get aggregationRegion() {
        return this.getStringAttribute('aggregation_region');
    }

    // aggregator_v2_arn - computed: true, optional: false, required: false
    public get aggregatorV2Arn() {
        return this.getStringAttribute('aggregator_v2_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // linked_regions - computed: false, optional: false, required: true
    private _linkedRegions?: string[]; 
    public get linkedRegions() {
        return cdktn.Fn.tolist(this.getListAttribute('linked_regions'));
    }
    public set linkedRegions(value: string[]) {
        this._linkedRegions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get linkedRegionsInput() {
        return this._linkedRegions;
    }

    // region_linking_mode - computed: false, optional: false, required: true
    private _regionLinkingMode?: string; 
    public get regionLinkingMode() {
        return this.getStringAttribute('region_linking_mode');
    }
    public set regionLinkingMode(value: string) {
        this._regionLinkingMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionLinkingModeInput() {
        return this._regionLinkingMode;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            linked_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._linkedRegions),
            region_linking_mode: cdktn.stringToTerraform(this._regionLinkingMode),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            linked_regions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._linkedRegions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            region_linking_mode: {
                value: cdktn.stringToHclTerraform(this._regionLinkingMode),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAggregatorV2 {
}
