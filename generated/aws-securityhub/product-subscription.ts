// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_product_subscription

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProductSubscriptionProps extends cdktn.TerraformMetaArguments {
    /**
    * The generic ARN of the product being subscribed to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_product_subscription#product_arn CcProductSubscription#product_arn}
    */
    readonly productArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_product_subscription awscc_securityhub_product_subscription}
*/
export class CcProductSubscription extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_product_subscription";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProductSubscription resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProductSubscription to import
    * @param importFromId The id of the existing CcProductSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_product_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProductSubscription to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_product_subscription", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_product_subscription awscc_securityhub_product_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProductSubscriptionProps
    */
    public constructor(scope: Construct, id: string, config: CcProductSubscriptionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_product_subscription',
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
        this._productArn = config.productArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // product_arn - computed: false, optional: false, required: true
    private _productArn?: string; 
    public get productArn() {
        return this.getStringAttribute('product_arn');
    }
    public set productArn(value: string) {
        this._productArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get productArnInput() {
        return this._productArn;
    }

    // product_subscription_arn - computed: true, optional: false, required: false
    public get productSubscriptionArn() {
        return this.getStringAttribute('product_subscription_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            product_arn: cdktn.stringToTerraform(this._productArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            product_arn: {
                value: cdktn.stringToHclTerraform(this._productArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcProductSubscription {
}
