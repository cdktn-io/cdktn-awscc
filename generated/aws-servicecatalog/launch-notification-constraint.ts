// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_launch_notification_constraint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLaunchNotificationConstraintProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_launch_notification_constraint#accept_language CcLaunchNotificationConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_launch_notification_constraint#description CcLaunchNotificationConstraint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_launch_notification_constraint#notification_arns CcLaunchNotificationConstraint#notification_arns}
    */
    readonly notificationArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_launch_notification_constraint#portfolio_id CcLaunchNotificationConstraint#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_launch_notification_constraint#product_id CcLaunchNotificationConstraint#product_id}
    */
    readonly productId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_launch_notification_constraint awscc_servicecatalog_launch_notification_constraint}
*/
export class CcLaunchNotificationConstraint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_launch_notification_constraint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLaunchNotificationConstraint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLaunchNotificationConstraint to import
    * @param importFromId The id of the existing CcLaunchNotificationConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_launch_notification_constraint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLaunchNotificationConstraint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_launch_notification_constraint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_launch_notification_constraint awscc_servicecatalog_launch_notification_constraint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLaunchNotificationConstraintProps
    */
    public constructor(scope: Construct, id: string, config: CcLaunchNotificationConstraintProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_launch_notification_constraint',
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
        this._acceptLanguage = config.acceptLanguage;
        this._description = config.description;
        this._notificationArns = config.notificationArns;
        this._portfolioId = config.portfolioId;
        this._productId = config.productId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: true, optional: true, required: false
    private _acceptLanguage?: string; 
    public get acceptLanguage() {
        return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string) {
        this._acceptLanguage = value;
    }
    public resetAcceptLanguage() {
        this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptLanguageInput() {
        return this._acceptLanguage;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // launch_notification_constraint_id - computed: true, optional: false, required: false
    public get launchNotificationConstraintId() {
        return this.getStringAttribute('launch_notification_constraint_id');
    }

    // notification_arns - computed: false, optional: false, required: true
    private _notificationArns?: string[]; 
    public get notificationArns() {
        return this.getListAttribute('notification_arns');
    }
    public set notificationArns(value: string[]) {
        this._notificationArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationArnsInput() {
        return this._notificationArns;
    }

    // portfolio_id - computed: false, optional: false, required: true
    private _portfolioId?: string; 
    public get portfolioId() {
        return this.getStringAttribute('portfolio_id');
    }
    public set portfolioId(value: string) {
        this._portfolioId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portfolioIdInput() {
        return this._portfolioId;
    }

    // product_id - computed: false, optional: false, required: true
    private _productId?: string; 
    public get productId() {
        return this.getStringAttribute('product_id');
    }
    public set productId(value: string) {
        this._productId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get productIdInput() {
        return this._productId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_language: cdktn.stringToTerraform(this._acceptLanguage),
            description: cdktn.stringToTerraform(this._description),
            notification_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notificationArns),
            portfolio_id: cdktn.stringToTerraform(this._portfolioId),
            product_id: cdktn.stringToTerraform(this._productId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accept_language: {
                value: cdktn.stringToHclTerraform(this._acceptLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notificationArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            portfolio_id: {
                value: cdktn.stringToHclTerraform(this._portfolioId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            product_id: {
                value: cdktn.stringToHclTerraform(this._productId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLaunchNotificationConstraint {
}
