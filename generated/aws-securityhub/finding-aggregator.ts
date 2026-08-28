// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_finding_aggregator

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFindingAggregatorProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.
    *  The selected option also determines how to use the Regions provided in the Regions list.
    *  In CFN, the options for this property are as follows:
    *   +  ``ALL_REGIONS`` - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. 
    *   +  ``ALL_REGIONS_EXCEPT_SPECIFIED`` - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the ``Regions`` parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. 
    *   +  ``SPECIFIED_REGIONS`` - Indicates to aggregate findings only from the Regions listed in the ``Regions`` parameter. Security Hub does not automatically aggregate findings from new Regions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_finding_aggregator#region_linking_mode CcFindingAggregator#region_linking_mode}
    */
    readonly regionLinkingMode: string;
    /**
    * If ``RegionLinkingMode`` is ``ALL_REGIONS_EXCEPT_SPECIFIED``, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.
    *  If ``RegionLinkingMode`` is ``SPECIFIED_REGIONS``, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_finding_aggregator#regions CcFindingAggregator#regions}
    */
    readonly regions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_finding_aggregator awscc_securityhub_finding_aggregator}
*/
export class CcFindingAggregator extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_finding_aggregator";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFindingAggregator resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFindingAggregator to import
    * @param importFromId The id of the existing CcFindingAggregator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_finding_aggregator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFindingAggregator to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_finding_aggregator", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_finding_aggregator awscc_securityhub_finding_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFindingAggregatorProps
    */
    public constructor(scope: Construct, id: string, config: CcFindingAggregatorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_finding_aggregator',
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
        this._regionLinkingMode = config.regionLinkingMode;
        this._regions = config.regions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // finding_aggregation_region - computed: true, optional: false, required: false
    public get findingAggregationRegion() {
        return this.getStringAttribute('finding_aggregation_region');
    }

    // finding_aggregator_arn - computed: true, optional: false, required: false
    public get findingAggregatorArn() {
        return this.getStringAttribute('finding_aggregator_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // regions - computed: true, optional: true, required: false
    private _regions?: string[]; 
    public get regions() {
        return cdktn.Fn.tolist(this.getListAttribute('regions'));
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    public resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            region_linking_mode: cdktn.stringToTerraform(this._regionLinkingMode),
            regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            region_linking_mode: {
                value: cdktn.stringToHclTerraform(this._regionLinkingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            regions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcFindingAggregator {
}
