// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_telemetry_enrichment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTelemetryEnrichmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Scope of the Telemetry Enrichment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_telemetry_enrichment#scope CcTelemetryEnrichment#scope}
    */
    readonly scope: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_telemetry_enrichment awscc_observabilityadmin_telemetry_enrichment}
*/
export class CcTelemetryEnrichment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_observabilityadmin_telemetry_enrichment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTelemetryEnrichment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTelemetryEnrichment to import
    * @param importFromId The id of the existing CcTelemetryEnrichment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_telemetry_enrichment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTelemetryEnrichment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_observabilityadmin_telemetry_enrichment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_telemetry_enrichment awscc_observabilityadmin_telemetry_enrichment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTelemetryEnrichmentProps
    */
    public constructor(scope: Construct, id: string, config: CcTelemetryEnrichmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_observabilityadmin_telemetry_enrichment',
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
        this._scope = config.scope;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // scope - computed: false, optional: false, required: true
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            scope: cdktn.stringToTerraform(this._scope),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            scope: {
                value: cdktn.stringToHclTerraform(this._scope),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTelemetryEnrichment {
}
