// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsguru_log_anomaly_detection_integration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLogAnomalyDetectionIntegrationProps extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsguru_log_anomaly_detection_integration awscc_devopsguru_log_anomaly_detection_integration}
*/
export class CcLogAnomalyDetectionIntegration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_devopsguru_log_anomaly_detection_integration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLogAnomalyDetectionIntegration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLogAnomalyDetectionIntegration to import
    * @param importFromId The id of the existing CcLogAnomalyDetectionIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsguru_log_anomaly_detection_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLogAnomalyDetectionIntegration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsguru_log_anomaly_detection_integration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsguru_log_anomaly_detection_integration awscc_devopsguru_log_anomaly_detection_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLogAnomalyDetectionIntegrationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcLogAnomalyDetectionIntegrationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_devopsguru_log_anomaly_detection_integration',
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
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
        };
        return attrs;
    }
}

export namespace CcLogAnomalyDetectionIntegration {
}
