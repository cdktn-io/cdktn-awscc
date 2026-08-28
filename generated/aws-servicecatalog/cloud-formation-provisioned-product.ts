// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCloudFormationProvisionedProductProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language CcCloudFormationProvisionedProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns CcCloudFormationProvisionedProduct#notification_arns}
    */
    readonly notificationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id CcCloudFormationProvisionedProduct#path_id}
    */
    readonly pathId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name CcCloudFormationProvisionedProduct#path_name}
    */
    readonly pathName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id CcCloudFormationProvisionedProduct#product_id}
    */
    readonly productId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name CcCloudFormationProvisionedProduct#product_name}
    */
    readonly productName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name CcCloudFormationProvisionedProduct#provisioned_product_name}
    */
    readonly provisionedProductName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id CcCloudFormationProvisionedProduct#provisioning_artifact_id}
    */
    readonly provisioningArtifactId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name CcCloudFormationProvisionedProduct#provisioning_artifact_name}
    */
    readonly provisioningArtifactName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters CcCloudFormationProvisionedProduct#provisioning_parameters}
    */
    readonly provisioningParameters?: CcCloudFormationProvisionedProduct.ProvisioningParameterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences CcCloudFormationProvisionedProduct#provisioning_preferences}
    */
    readonly provisioningPreferences?: CcCloudFormationProvisionedProduct.ProvisioningPreferencesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#tags CcCloudFormationProvisionedProduct#tags}
    */
    readonly tags?: CcCloudFormationProvisionedProduct.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product}
*/
export class CcCloudFormationProvisionedProduct extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_cloudformation_provisioned_product";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCloudFormationProvisionedProduct resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCloudFormationProvisionedProduct to import
    * @param importFromId The id of the existing CcCloudFormationProvisionedProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCloudFormationProvisionedProduct to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_cloudformation_provisioned_product", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCloudFormationProvisionedProductProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcCloudFormationProvisionedProductProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_cloudformation_provisioned_product',
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
        this._acceptLanguage = config.acceptLanguage;
        this._notificationArns = config.notificationArns;
        this._pathId = config.pathId;
        this._pathName = config.pathName;
        this._productId = config.productId;
        this._productName = config.productName;
        this._provisionedProductName = config.provisionedProductName;
        this._provisioningArtifactId = config.provisioningArtifactId;
        this._provisioningArtifactName = config.provisioningArtifactName;
        this._provisioningParameters.internalValue = config.provisioningParameters;
        this._provisioningPreferences.internalValue = config.provisioningPreferences;
        this._tags.internalValue = config.tags;
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

    // cloudformation_stack_arn - computed: true, optional: false, required: false
    public get cloudformationStackArn() {
        return this.getStringAttribute('cloudformation_stack_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notification_arns - computed: true, optional: true, required: false
    private _notificationArns?: string[]; 
    public get notificationArns() {
        return this.getListAttribute('notification_arns');
    }
    public set notificationArns(value: string[]) {
        this._notificationArns = value;
    }
    public resetNotificationArns() {
        this._notificationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationArnsInput() {
        return this._notificationArns;
    }

    // outputs - computed: true, optional: false, required: false
    private _outputs = new cdktn.StringMap(this, "outputs");
    public get outputs() {
        return this._outputs;
    }

    // path_id - computed: true, optional: true, required: false
    private _pathId?: string; 
    public get pathId() {
        return this.getStringAttribute('path_id');
    }
    public set pathId(value: string) {
        this._pathId = value;
    }
    public resetPathId() {
        this._pathId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathIdInput() {
        return this._pathId;
    }

    // path_name - computed: true, optional: true, required: false
    private _pathName?: string; 
    public get pathName() {
        return this.getStringAttribute('path_name');
    }
    public set pathName(value: string) {
        this._pathName = value;
    }
    public resetPathName() {
        this._pathName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathNameInput() {
        return this._pathName;
    }

    // product_id - computed: true, optional: true, required: false
    private _productId?: string; 
    public get productId() {
        return this.getStringAttribute('product_id');
    }
    public set productId(value: string) {
        this._productId = value;
    }
    public resetProductId() {
        this._productId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productIdInput() {
        return this._productId;
    }

    // product_name - computed: true, optional: true, required: false
    private _productName?: string; 
    public get productName() {
        return this.getStringAttribute('product_name');
    }
    public set productName(value: string) {
        this._productName = value;
    }
    public resetProductName() {
        this._productName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productNameInput() {
        return this._productName;
    }

    // provisioned_product_id - computed: true, optional: false, required: false
    public get provisionedProductId() {
        return this.getStringAttribute('provisioned_product_id');
    }

    // provisioned_product_name - computed: true, optional: true, required: false
    private _provisionedProductName?: string; 
    public get provisionedProductName() {
        return this.getStringAttribute('provisioned_product_name');
    }
    public set provisionedProductName(value: string) {
        this._provisionedProductName = value;
    }
    public resetProvisionedProductName() {
        this._provisionedProductName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedProductNameInput() {
        return this._provisionedProductName;
    }

    // provisioning_artifact_id - computed: true, optional: true, required: false
    private _provisioningArtifactId?: string; 
    public get provisioningArtifactId() {
        return this.getStringAttribute('provisioning_artifact_id');
    }
    public set provisioningArtifactId(value: string) {
        this._provisioningArtifactId = value;
    }
    public resetProvisioningArtifactId() {
        this._provisioningArtifactId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningArtifactIdInput() {
        return this._provisioningArtifactId;
    }

    // provisioning_artifact_name - computed: true, optional: true, required: false
    private _provisioningArtifactName?: string; 
    public get provisioningArtifactName() {
        return this.getStringAttribute('provisioning_artifact_name');
    }
    public set provisioningArtifactName(value: string) {
        this._provisioningArtifactName = value;
    }
    public resetProvisioningArtifactName() {
        this._provisioningArtifactName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningArtifactNameInput() {
        return this._provisioningArtifactName;
    }

    // provisioning_parameters - computed: true, optional: true, required: false
    private _provisioningParameters = new CcCloudFormationProvisionedProduct.ProvisioningParameterPropertyList(this, "provisioning_parameters", false);
    public get provisioningParameters() {
        return this._provisioningParameters;
    }
    public putProvisioningParameters(value: CcCloudFormationProvisionedProduct.ProvisioningParameterProperty[] | cdktn.IResolvable) {
        this._provisioningParameters.internalValue = value;
    }
    public resetProvisioningParameters() {
        this._provisioningParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningParametersInput() {
        return this._provisioningParameters.internalValue;
    }

    // provisioning_preferences - computed: true, optional: true, required: false
    private _provisioningPreferences = new CcCloudFormationProvisionedProduct.ProvisioningPreferencesPropertyOutputReference(this, "provisioning_preferences");
    public get provisioningPreferences() {
        return this._provisioningPreferences;
    }
    public putProvisioningPreferences(value: CcCloudFormationProvisionedProduct.ProvisioningPreferencesProperty) {
        this._provisioningPreferences.internalValue = value;
    }
    public resetProvisioningPreferences() {
        this._provisioningPreferences.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningPreferencesInput() {
        return this._provisioningPreferences.internalValue;
    }

    // record_id - computed: true, optional: false, required: false
    public get recordId() {
        return this.getStringAttribute('record_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCloudFormationProvisionedProduct.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCloudFormationProvisionedProduct.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_language: cdktn.stringToTerraform(this._acceptLanguage),
            notification_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notificationArns),
            path_id: cdktn.stringToTerraform(this._pathId),
            path_name: cdktn.stringToTerraform(this._pathName),
            product_id: cdktn.stringToTerraform(this._productId),
            product_name: cdktn.stringToTerraform(this._productName),
            provisioned_product_name: cdktn.stringToTerraform(this._provisionedProductName),
            provisioning_artifact_id: cdktn.stringToTerraform(this._provisioningArtifactId),
            provisioning_artifact_name: cdktn.stringToTerraform(this._provisioningArtifactName),
            provisioning_parameters: cdktn.listMapper(ccCloudFormationProvisionedProductProvisioningParameterPropertyToTerraform, false)(this._provisioningParameters.internalValue),
            provisioning_preferences: ccCloudFormationProvisionedProductProvisioningPreferencesPropertyToTerraform(this._provisioningPreferences.internalValue),
            tags: cdktn.listMapper(ccCloudFormationProvisionedProductTagPropertyToTerraform, false)(this._tags.internalValue),
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
            notification_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notificationArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            path_id: {
                value: cdktn.stringToHclTerraform(this._pathId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path_name: {
                value: cdktn.stringToHclTerraform(this._pathName),
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
            product_name: {
                value: cdktn.stringToHclTerraform(this._productName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioned_product_name: {
                value: cdktn.stringToHclTerraform(this._provisionedProductName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioning_artifact_id: {
                value: cdktn.stringToHclTerraform(this._provisioningArtifactId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioning_artifact_name: {
                value: cdktn.stringToHclTerraform(this._provisioningArtifactName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioning_parameters: {
                value: cdktn.listMapperHcl(ccCloudFormationProvisionedProductProvisioningParameterPropertyToHclTerraform, false)(this._provisioningParameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudFormationProvisionedProduct.ProvisioningParameterPropertyList",
            },
            provisioning_preferences: {
                value: ccCloudFormationProvisionedProductProvisioningPreferencesPropertyToHclTerraform(this._provisioningPreferences.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCloudFormationProvisionedProduct.ProvisioningPreferencesProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCloudFormationProvisionedProductTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudFormationProvisionedProduct.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCloudFormationProvisionedProductProvisioningParameterPropertyToTerraform(struct?: CcCloudFormationProvisionedProduct.ProvisioningParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCloudFormationProvisionedProductProvisioningParameterPropertyToHclTerraform(struct?: CcCloudFormationProvisionedProduct.ProvisioningParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudFormationProvisionedProductProvisioningPreferencesPropertyToTerraform(struct?: CcCloudFormationProvisionedProduct.ProvisioningPreferencesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        stack_set_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stackSetAccounts),
        stack_set_failure_tolerance_count: cdktn.numberToTerraform(struct!.stackSetFailureToleranceCount),
        stack_set_failure_tolerance_percentage: cdktn.numberToTerraform(struct!.stackSetFailureTolerancePercentage),
        stack_set_max_concurrency_count: cdktn.numberToTerraform(struct!.stackSetMaxConcurrencyCount),
        stack_set_max_concurrency_percentage: cdktn.numberToTerraform(struct!.stackSetMaxConcurrencyPercentage),
        stack_set_operation_type: cdktn.stringToTerraform(struct!.stackSetOperationType),
        stack_set_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stackSetRegions),
    }
}


export function ccCloudFormationProvisionedProductProvisioningPreferencesPropertyToHclTerraform(struct?: CcCloudFormationProvisionedProduct.ProvisioningPreferencesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        stack_set_accounts: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stackSetAccounts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        stack_set_failure_tolerance_count: {
            value: cdktn.numberToHclTerraform(struct!.stackSetFailureToleranceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stack_set_failure_tolerance_percentage: {
            value: cdktn.numberToHclTerraform(struct!.stackSetFailureTolerancePercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stack_set_max_concurrency_count: {
            value: cdktn.numberToHclTerraform(struct!.stackSetMaxConcurrencyCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stack_set_max_concurrency_percentage: {
            value: cdktn.numberToHclTerraform(struct!.stackSetMaxConcurrencyPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stack_set_operation_type: {
            value: cdktn.stringToHclTerraform(struct!.stackSetOperationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stack_set_regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stackSetRegions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudFormationProvisionedProductTagPropertyToTerraform(struct?: CcCloudFormationProvisionedProduct.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCloudFormationProvisionedProductTagPropertyToHclTerraform(struct?: CcCloudFormationProvisionedProduct.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCloudFormationProvisionedProduct {
export interface ProvisioningParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#key CcCloudFormationProvisionedProduct#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#value CcCloudFormationProvisionedProduct#value}
    */
    readonly value?: string;
}
export class ProvisioningParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ProvisioningParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisioningParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class ProvisioningParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : ProvisioningParameterProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): ProvisioningParameterPropertyOutputReference {
        return new ProvisioningParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProvisioningPreferencesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts CcCloudFormationProvisionedProduct#stack_set_accounts}
    */
    readonly stackSetAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count CcCloudFormationProvisionedProduct#stack_set_failure_tolerance_count}
    */
    readonly stackSetFailureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage CcCloudFormationProvisionedProduct#stack_set_failure_tolerance_percentage}
    */
    readonly stackSetFailureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count CcCloudFormationProvisionedProduct#stack_set_max_concurrency_count}
    */
    readonly stackSetMaxConcurrencyCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage CcCloudFormationProvisionedProduct#stack_set_max_concurrency_percentage}
    */
    readonly stackSetMaxConcurrencyPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type CcCloudFormationProvisionedProduct#stack_set_operation_type}
    */
    readonly stackSetOperationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions CcCloudFormationProvisionedProduct#stack_set_regions}
    */
    readonly stackSetRegions?: string[];
}
export class ProvisioningPreferencesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisioningPreferencesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._stackSetAccounts !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackSetAccounts = this._stackSetAccounts;
        }
        if (this._stackSetFailureToleranceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackSetFailureToleranceCount = this._stackSetFailureToleranceCount;
        }
        if (this._stackSetFailureTolerancePercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackSetFailureTolerancePercentage = this._stackSetFailureTolerancePercentage;
        }
        if (this._stackSetMaxConcurrencyCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackSetMaxConcurrencyCount = this._stackSetMaxConcurrencyCount;
        }
        if (this._stackSetMaxConcurrencyPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackSetMaxConcurrencyPercentage = this._stackSetMaxConcurrencyPercentage;
        }
        if (this._stackSetOperationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackSetOperationType = this._stackSetOperationType;
        }
        if (this._stackSetRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackSetRegions = this._stackSetRegions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisioningPreferencesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._stackSetAccounts = undefined;
            this._stackSetFailureToleranceCount = undefined;
            this._stackSetFailureTolerancePercentage = undefined;
            this._stackSetMaxConcurrencyCount = undefined;
            this._stackSetMaxConcurrencyPercentage = undefined;
            this._stackSetOperationType = undefined;
            this._stackSetRegions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._stackSetAccounts = value.stackSetAccounts;
            this._stackSetFailureToleranceCount = value.stackSetFailureToleranceCount;
            this._stackSetFailureTolerancePercentage = value.stackSetFailureTolerancePercentage;
            this._stackSetMaxConcurrencyCount = value.stackSetMaxConcurrencyCount;
            this._stackSetMaxConcurrencyPercentage = value.stackSetMaxConcurrencyPercentage;
            this._stackSetOperationType = value.stackSetOperationType;
            this._stackSetRegions = value.stackSetRegions;
        }
    }

    // stack_set_accounts - computed: true, optional: true, required: false
    private _stackSetAccounts?: string[]; 
    public get stackSetAccounts() {
        return this.getListAttribute('stack_set_accounts');
    }
    public set stackSetAccounts(value: string[]) {
        this._stackSetAccounts = value;
    }
    public resetStackSetAccounts() {
        this._stackSetAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetAccountsInput() {
        return this._stackSetAccounts;
    }

    // stack_set_failure_tolerance_count - computed: true, optional: true, required: false
    private _stackSetFailureToleranceCount?: number; 
    public get stackSetFailureToleranceCount() {
        return this.getNumberAttribute('stack_set_failure_tolerance_count');
    }
    public set stackSetFailureToleranceCount(value: number) {
        this._stackSetFailureToleranceCount = value;
    }
    public resetStackSetFailureToleranceCount() {
        this._stackSetFailureToleranceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetFailureToleranceCountInput() {
        return this._stackSetFailureToleranceCount;
    }

    // stack_set_failure_tolerance_percentage - computed: true, optional: true, required: false
    private _stackSetFailureTolerancePercentage?: number; 
    public get stackSetFailureTolerancePercentage() {
        return this.getNumberAttribute('stack_set_failure_tolerance_percentage');
    }
    public set stackSetFailureTolerancePercentage(value: number) {
        this._stackSetFailureTolerancePercentage = value;
    }
    public resetStackSetFailureTolerancePercentage() {
        this._stackSetFailureTolerancePercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetFailureTolerancePercentageInput() {
        return this._stackSetFailureTolerancePercentage;
    }

    // stack_set_max_concurrency_count - computed: true, optional: true, required: false
    private _stackSetMaxConcurrencyCount?: number; 
    public get stackSetMaxConcurrencyCount() {
        return this.getNumberAttribute('stack_set_max_concurrency_count');
    }
    public set stackSetMaxConcurrencyCount(value: number) {
        this._stackSetMaxConcurrencyCount = value;
    }
    public resetStackSetMaxConcurrencyCount() {
        this._stackSetMaxConcurrencyCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetMaxConcurrencyCountInput() {
        return this._stackSetMaxConcurrencyCount;
    }

    // stack_set_max_concurrency_percentage - computed: true, optional: true, required: false
    private _stackSetMaxConcurrencyPercentage?: number; 
    public get stackSetMaxConcurrencyPercentage() {
        return this.getNumberAttribute('stack_set_max_concurrency_percentage');
    }
    public set stackSetMaxConcurrencyPercentage(value: number) {
        this._stackSetMaxConcurrencyPercentage = value;
    }
    public resetStackSetMaxConcurrencyPercentage() {
        this._stackSetMaxConcurrencyPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetMaxConcurrencyPercentageInput() {
        return this._stackSetMaxConcurrencyPercentage;
    }

    // stack_set_operation_type - computed: true, optional: true, required: false
    private _stackSetOperationType?: string; 
    public get stackSetOperationType() {
        return this.getStringAttribute('stack_set_operation_type');
    }
    public set stackSetOperationType(value: string) {
        this._stackSetOperationType = value;
    }
    public resetStackSetOperationType() {
        this._stackSetOperationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetOperationTypeInput() {
        return this._stackSetOperationType;
    }

    // stack_set_regions - computed: true, optional: true, required: false
    private _stackSetRegions?: string[]; 
    public get stackSetRegions() {
        return this.getListAttribute('stack_set_regions');
    }
    public set stackSetRegions(value: string[]) {
        this._stackSetRegions = value;
    }
    public resetStackSetRegions() {
        this._stackSetRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetRegionsInput() {
        return this._stackSetRegions;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#key CcCloudFormationProvisionedProduct#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_cloudformation_provisioned_product#value CcCloudFormationProvisionedProduct#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
