// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCloudFormationProductProps extends cdktn.TerraformMetaArguments {
    /**
    * The language code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#accept_language CcCloudFormationProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * The description of the product.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#description CcCloudFormationProduct#description}
    */
    readonly description?: string;
    /**
    * The distributor of the product.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#distributor CcCloudFormationProduct#distributor}
    */
    readonly distributor?: string;
    /**
    * The name of the product.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#name CcCloudFormationProduct#name}
    */
    readonly name: string;
    /**
    * The owner of the product.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#owner CcCloudFormationProduct#owner}
    */
    readonly owner: string;
    /**
    * The type of product.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#product_type CcCloudFormationProduct#product_type}
    */
    readonly productType?: string;
    /**
    * The configuration of the provisioning artifact (also known as a version).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#provisioning_artifact_parameters CcCloudFormationProduct#provisioning_artifact_parameters}
    */
    readonly provisioningArtifactParameters?: CcCloudFormationProduct.ProvisioningArtifactPropertiesProperty[] | cdktn.IResolvable;
    /**
    * This property is turned off by default. If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#replace_provisioning_artifacts CcCloudFormationProduct#replace_provisioning_artifacts}
    */
    readonly replaceProvisioningArtifacts?: boolean | cdktn.IResolvable;
    /**
    * A top level ProductViewDetail response containing details about the product's connection. AWS Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#source_connection CcCloudFormationProduct#source_connection}
    */
    readonly sourceConnection?: CcCloudFormationProduct.SourceConnectionProperty;
    /**
    * The support information about the product.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_description CcCloudFormationProduct#support_description}
    */
    readonly supportDescription?: string;
    /**
    * The contact email for product support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_email CcCloudFormationProduct#support_email}
    */
    readonly supportEmail?: string;
    /**
    * The contact URL for product support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_url CcCloudFormationProduct#support_url}
    */
    readonly supportUrl?: string;
    /**
    * One or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#tags CcCloudFormationProduct#tags}
    */
    readonly tags?: CcCloudFormationProduct.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product}
*/
export class CcCloudFormationProduct extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_cloudformation_product";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCloudFormationProduct resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCloudFormationProduct to import
    * @param importFromId The id of the existing CcCloudFormationProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCloudFormationProduct to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_cloudformation_product", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCloudFormationProductProps
    */
    public constructor(scope: Construct, id: string, config: CcCloudFormationProductProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_cloudformation_product',
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
        this._distributor = config.distributor;
        this._name = config.name;
        this._owner = config.owner;
        this._productType = config.productType;
        this._provisioningArtifactParameters.internalValue = config.provisioningArtifactParameters;
        this._replaceProvisioningArtifacts = config.replaceProvisioningArtifacts;
        this._sourceConnection.internalValue = config.sourceConnection;
        this._supportDescription = config.supportDescription;
        this._supportEmail = config.supportEmail;
        this._supportUrl = config.supportUrl;
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

    // cloudformation_product_id - computed: true, optional: false, required: false
    public get cloudformationProductId() {
        return this.getStringAttribute('cloudformation_product_id');
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

    // distributor - computed: true, optional: true, required: false
    private _distributor?: string; 
    public get distributor() {
        return this.getStringAttribute('distributor');
    }
    public set distributor(value: string) {
        this._distributor = value;
    }
    public resetDistributor() {
        this._distributor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distributorInput() {
        return this._distributor;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // owner - computed: false, optional: false, required: true
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }

    // product_name - computed: true, optional: false, required: false
    public get productName() {
        return this.getStringAttribute('product_name');
    }

    // product_type - computed: true, optional: true, required: false
    private _productType?: string; 
    public get productType() {
        return this.getStringAttribute('product_type');
    }
    public set productType(value: string) {
        this._productType = value;
    }
    public resetProductType() {
        this._productType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productTypeInput() {
        return this._productType;
    }

    // provisioning_artifact_ids - computed: true, optional: false, required: false
    public get provisioningArtifactIds() {
        return this.getStringAttribute('provisioning_artifact_ids');
    }

    // provisioning_artifact_names - computed: true, optional: false, required: false
    public get provisioningArtifactNames() {
        return this.getStringAttribute('provisioning_artifact_names');
    }

    // provisioning_artifact_parameters - computed: true, optional: true, required: false
    private _provisioningArtifactParameters = new CcCloudFormationProduct.ProvisioningArtifactPropertiesPropertyList(this, "provisioning_artifact_parameters", false);
    public get provisioningArtifactParameters() {
        return this._provisioningArtifactParameters;
    }
    public putProvisioningArtifactParameters(value: CcCloudFormationProduct.ProvisioningArtifactPropertiesProperty[] | cdktn.IResolvable) {
        this._provisioningArtifactParameters.internalValue = value;
    }
    public resetProvisioningArtifactParameters() {
        this._provisioningArtifactParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningArtifactParametersInput() {
        return this._provisioningArtifactParameters.internalValue;
    }

    // replace_provisioning_artifacts - computed: true, optional: true, required: false
    private _replaceProvisioningArtifacts?: boolean | cdktn.IResolvable; 
    public get replaceProvisioningArtifacts() {
        return this.getBooleanAttribute('replace_provisioning_artifacts');
    }
    public set replaceProvisioningArtifacts(value: boolean | cdktn.IResolvable) {
        this._replaceProvisioningArtifacts = value;
    }
    public resetReplaceProvisioningArtifacts() {
        this._replaceProvisioningArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceProvisioningArtifactsInput() {
        return this._replaceProvisioningArtifacts;
    }

    // source_connection - computed: true, optional: true, required: false
    private _sourceConnection = new CcCloudFormationProduct.SourceConnectionPropertyOutputReference(this, "source_connection");
    public get sourceConnection() {
        return this._sourceConnection;
    }
    public putSourceConnection(value: CcCloudFormationProduct.SourceConnectionProperty) {
        this._sourceConnection.internalValue = value;
    }
    public resetSourceConnection() {
        this._sourceConnection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConnectionInput() {
        return this._sourceConnection.internalValue;
    }

    // support_description - computed: true, optional: true, required: false
    private _supportDescription?: string; 
    public get supportDescription() {
        return this.getStringAttribute('support_description');
    }
    public set supportDescription(value: string) {
        this._supportDescription = value;
    }
    public resetSupportDescription() {
        this._supportDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportDescriptionInput() {
        return this._supportDescription;
    }

    // support_email - computed: true, optional: true, required: false
    private _supportEmail?: string; 
    public get supportEmail() {
        return this.getStringAttribute('support_email');
    }
    public set supportEmail(value: string) {
        this._supportEmail = value;
    }
    public resetSupportEmail() {
        this._supportEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportEmailInput() {
        return this._supportEmail;
    }

    // support_url - computed: true, optional: true, required: false
    private _supportUrl?: string; 
    public get supportUrl() {
        return this.getStringAttribute('support_url');
    }
    public set supportUrl(value: string) {
        this._supportUrl = value;
    }
    public resetSupportUrl() {
        this._supportUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportUrlInput() {
        return this._supportUrl;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCloudFormationProduct.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCloudFormationProduct.TagProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            distributor: cdktn.stringToTerraform(this._distributor),
            name: cdktn.stringToTerraform(this._name),
            owner: cdktn.stringToTerraform(this._owner),
            product_type: cdktn.stringToTerraform(this._productType),
            provisioning_artifact_parameters: cdktn.listMapper(ccCloudFormationProductProvisioningArtifactPropertiesPropertyToTerraform, false)(this._provisioningArtifactParameters.internalValue),
            replace_provisioning_artifacts: cdktn.booleanToTerraform(this._replaceProvisioningArtifacts),
            source_connection: ccCloudFormationProductSourceConnectionPropertyToTerraform(this._sourceConnection.internalValue),
            support_description: cdktn.stringToTerraform(this._supportDescription),
            support_email: cdktn.stringToTerraform(this._supportEmail),
            support_url: cdktn.stringToTerraform(this._supportUrl),
            tags: cdktn.listMapper(ccCloudFormationProductTagPropertyToTerraform, false)(this._tags.internalValue),
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
            distributor: {
                value: cdktn.stringToHclTerraform(this._distributor),
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
            owner: {
                value: cdktn.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            product_type: {
                value: cdktn.stringToHclTerraform(this._productType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioning_artifact_parameters: {
                value: cdktn.listMapperHcl(ccCloudFormationProductProvisioningArtifactPropertiesPropertyToHclTerraform, false)(this._provisioningArtifactParameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudFormationProduct.ProvisioningArtifactPropertiesPropertyList",
            },
            replace_provisioning_artifacts: {
                value: cdktn.booleanToHclTerraform(this._replaceProvisioningArtifacts),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            source_connection: {
                value: ccCloudFormationProductSourceConnectionPropertyToHclTerraform(this._sourceConnection.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCloudFormationProduct.SourceConnectionProperty",
            },
            support_description: {
                value: cdktn.stringToHclTerraform(this._supportDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            support_email: {
                value: cdktn.stringToHclTerraform(this._supportEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            support_url: {
                value: cdktn.stringToHclTerraform(this._supportUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCloudFormationProductTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudFormationProduct.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCloudFormationProductInfoPropertyToTerraform(struct?: CcCloudFormationProduct.InfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        import_from_physical_id: cdktn.stringToTerraform(struct!.importFromPhysicalId),
        load_template_from_url: cdktn.stringToTerraform(struct!.loadTemplateFromUrl),
    }
}


export function ccCloudFormationProductInfoPropertyToHclTerraform(struct?: CcCloudFormationProduct.InfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        import_from_physical_id: {
            value: cdktn.stringToHclTerraform(struct!.importFromPhysicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        load_template_from_url: {
            value: cdktn.stringToHclTerraform(struct!.loadTemplateFromUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudFormationProductProvisioningArtifactPropertiesPropertyToTerraform(struct?: CcCloudFormationProduct.ProvisioningArtifactPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        disable_template_validation: cdktn.booleanToTerraform(struct!.disableTemplateValidation),
        info: ccCloudFormationProductInfoPropertyToTerraform(struct!.info),
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccCloudFormationProductProvisioningArtifactPropertiesPropertyToHclTerraform(struct?: CcCloudFormationProduct.ProvisioningArtifactPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disable_template_validation: {
            value: cdktn.booleanToHclTerraform(struct!.disableTemplateValidation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        info: {
            value: ccCloudFormationProductInfoPropertyToHclTerraform(struct!.info),
            isBlock: true,
            type: "struct",
            storageClassType: "InfoProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudFormationProductCodeStarParametersPropertyToTerraform(struct?: CcCloudFormationProduct.CodeStarParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        artifact_path: cdktn.stringToTerraform(struct!.artifactPath),
        branch: cdktn.stringToTerraform(struct!.branch),
        connection_arn: cdktn.stringToTerraform(struct!.connectionArn),
        repository: cdktn.stringToTerraform(struct!.repository),
    }
}


export function ccCloudFormationProductCodeStarParametersPropertyToHclTerraform(struct?: CcCloudFormationProduct.CodeStarParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        artifact_path: {
            value: cdktn.stringToHclTerraform(struct!.artifactPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        branch: {
            value: cdktn.stringToHclTerraform(struct!.branch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.connectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository: {
            value: cdktn.stringToHclTerraform(struct!.repository),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudFormationProductConnectionParametersPropertyToTerraform(struct?: CcCloudFormationProduct.ConnectionParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code_star: ccCloudFormationProductCodeStarParametersPropertyToTerraform(struct!.codeStar),
    }
}


export function ccCloudFormationProductConnectionParametersPropertyToHclTerraform(struct?: CcCloudFormationProduct.ConnectionParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code_star: {
            value: ccCloudFormationProductCodeStarParametersPropertyToHclTerraform(struct!.codeStar),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeStarParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudFormationProductSourceConnectionPropertyToTerraform(struct?: CcCloudFormationProduct.SourceConnectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_parameters: ccCloudFormationProductConnectionParametersPropertyToTerraform(struct!.connectionParameters),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccCloudFormationProductSourceConnectionPropertyToHclTerraform(struct?: CcCloudFormationProduct.SourceConnectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_parameters: {
            value: ccCloudFormationProductConnectionParametersPropertyToHclTerraform(struct!.connectionParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectionParametersProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudFormationProductTagPropertyToTerraform(struct?: CcCloudFormationProduct.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCloudFormationProductTagPropertyToHclTerraform(struct?: CcCloudFormationProduct.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCloudFormationProduct {
export interface InfoProperty {
    /**
    * The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#import_from_physical_id CcCloudFormationProduct#import_from_physical_id}
    */
    readonly importFromPhysicalId?: string;
    /**
    * The URL of the AWS CloudFormation template in Amazon S3 in JSON format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#load_template_from_url CcCloudFormationProduct#load_template_from_url}
    */
    readonly loadTemplateFromUrl?: string;
}
export class InfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._importFromPhysicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.importFromPhysicalId = this._importFromPhysicalId;
        }
        if (this._loadTemplateFromUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadTemplateFromUrl = this._loadTemplateFromUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._importFromPhysicalId = undefined;
            this._loadTemplateFromUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._importFromPhysicalId = value.importFromPhysicalId;
            this._loadTemplateFromUrl = value.loadTemplateFromUrl;
        }
    }

    // import_from_physical_id - computed: true, optional: true, required: false
    private _importFromPhysicalId?: string; 
    public get importFromPhysicalId() {
        return this.getStringAttribute('import_from_physical_id');
    }
    public set importFromPhysicalId(value: string) {
        this._importFromPhysicalId = value;
    }
    public resetImportFromPhysicalId() {
        this._importFromPhysicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importFromPhysicalIdInput() {
        return this._importFromPhysicalId;
    }

    // load_template_from_url - computed: true, optional: true, required: false
    private _loadTemplateFromUrl?: string; 
    public get loadTemplateFromUrl() {
        return this.getStringAttribute('load_template_from_url');
    }
    public set loadTemplateFromUrl(value: string) {
        this._loadTemplateFromUrl = value;
    }
    public resetLoadTemplateFromUrl() {
        this._loadTemplateFromUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadTemplateFromUrlInput() {
        return this._loadTemplateFromUrl;
    }
}
export interface ProvisioningArtifactPropertiesProperty {
    /**
    * The description of the provisioning artifact, including how it differs from the previous provisioning artifact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#description CcCloudFormationProduct#description}
    */
    readonly description?: string;
    /**
    * If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#disable_template_validation CcCloudFormationProduct#disable_template_validation}
    */
    readonly disableTemplateValidation?: boolean | cdktn.IResolvable;
    /**
    * Specify the template source with one of the following options, but not both. Keys accepted: [ LoadTemplateFromURL, ImportFromPhysicalId ] The URL of the AWS CloudFormation template in Amazon S3 in JSON format. Specify the URL in JSON format as follows:
    * 
    * "LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."
    * 
    * ImportFromPhysicalId: The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. Specify the physical id in JSON format as follows: ImportFromPhysicalId: "arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#info CcCloudFormationProduct#info}
    */
    readonly info?: InfoProperty;
    /**
    * The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#name CcCloudFormationProduct#name}
    */
    readonly name?: string;
    /**
    * The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#type CcCloudFormationProduct#type}
    */
    readonly type?: string;
}
export class ProvisioningArtifactPropertiesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProvisioningArtifactPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._disableTemplateValidation !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableTemplateValidation = this._disableTemplateValidation;
        }
        if (this._info?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.info = this._info?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisioningArtifactPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._disableTemplateValidation = undefined;
            this._info.internalValue = undefined;
            this._name = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._disableTemplateValidation = value.disableTemplateValidation;
            this._info.internalValue = value.info;
            this._name = value.name;
            this._type = value.type;
        }
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

    // disable_template_validation - computed: true, optional: true, required: false
    private _disableTemplateValidation?: boolean | cdktn.IResolvable; 
    public get disableTemplateValidation() {
        return this.getBooleanAttribute('disable_template_validation');
    }
    public set disableTemplateValidation(value: boolean | cdktn.IResolvable) {
        this._disableTemplateValidation = value;
    }
    public resetDisableTemplateValidation() {
        this._disableTemplateValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableTemplateValidationInput() {
        return this._disableTemplateValidation;
    }

    // info - computed: true, optional: true, required: false
    private _info = new InfoPropertyOutputReference(this, "info");
    public get info() {
        return this._info;
    }
    public putInfo(value: InfoProperty) {
        this._info.internalValue = value;
    }
    public resetInfo() {
        this._info.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get infoInput() {
        return this._info.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class ProvisioningArtifactPropertiesPropertyList extends cdktn.ComplexList {
    public internalValue? : ProvisioningArtifactPropertiesProperty[] | cdktn.IResolvable

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
    public get(index: number): ProvisioningArtifactPropertiesPropertyOutputReference {
        return new ProvisioningArtifactPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CodeStarParametersProperty {
    /**
    * The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#artifact_path CcCloudFormationProduct#artifact_path}
    */
    readonly artifactPath?: string;
    /**
    * The specific branch where the artifact resides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#branch CcCloudFormationProduct#branch}
    */
    readonly branch?: string;
    /**
    * The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#connection_arn CcCloudFormationProduct#connection_arn}
    */
    readonly connectionArn?: string;
    /**
    * The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo."
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#repository CcCloudFormationProduct#repository}
    */
    readonly repository?: string;
}
export class CodeStarParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeStarParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._artifactPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.artifactPath = this._artifactPath;
        }
        if (this._branch !== undefined) {
            hasAnyValues = true;
            internalValueResult.branch = this._branch;
        }
        if (this._connectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionArn = this._connectionArn;
        }
        if (this._repository !== undefined) {
            hasAnyValues = true;
            internalValueResult.repository = this._repository;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeStarParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._artifactPath = undefined;
            this._branch = undefined;
            this._connectionArn = undefined;
            this._repository = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._artifactPath = value.artifactPath;
            this._branch = value.branch;
            this._connectionArn = value.connectionArn;
            this._repository = value.repository;
        }
    }

    // artifact_path - computed: true, optional: true, required: false
    private _artifactPath?: string; 
    public get artifactPath() {
        return this.getStringAttribute('artifact_path');
    }
    public set artifactPath(value: string) {
        this._artifactPath = value;
    }
    public resetArtifactPath() {
        this._artifactPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactPathInput() {
        return this._artifactPath;
    }

    // branch - computed: true, optional: true, required: false
    private _branch?: string; 
    public get branch() {
        return this.getStringAttribute('branch');
    }
    public set branch(value: string) {
        this._branch = value;
    }
    public resetBranch() {
        this._branch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchInput() {
        return this._branch;
    }

    // connection_arn - computed: true, optional: true, required: false
    private _connectionArn?: string; 
    public get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }
    public set connectionArn(value: string) {
        this._connectionArn = value;
    }
    public resetConnectionArn() {
        this._connectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionArnInput() {
        return this._connectionArn;
    }

    // repository - computed: true, optional: true, required: false
    private _repository?: string; 
    public get repository() {
        return this.getStringAttribute('repository');
    }
    public set repository(value: string) {
        this._repository = value;
    }
    public resetRepository() {
        this._repository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryInput() {
        return this._repository;
    }
}
export interface ConnectionParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#code_star CcCloudFormationProduct#code_star}
    */
    readonly codeStar?: CodeStarParametersProperty;
}
export class ConnectionParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codeStar?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeStar = this._codeStar?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codeStar.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codeStar.internalValue = value.codeStar;
        }
    }

    // code_star - computed: true, optional: true, required: false
    private _codeStar = new CodeStarParametersPropertyOutputReference(this, "code_star");
    public get codeStar() {
        return this._codeStar;
    }
    public putCodeStar(value: CodeStarParametersProperty) {
        this._codeStar.internalValue = value;
    }
    public resetCodeStar() {
        this._codeStar.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeStarInput() {
        return this._codeStar.internalValue;
    }
}
export interface SourceConnectionProperty {
    /**
    * The connection details based on the connection Type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#connection_parameters CcCloudFormationProduct#connection_parameters}
    */
    readonly connectionParameters?: ConnectionParametersProperty;
    /**
    * The only supported SourceConnection type is Codestar.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#type CcCloudFormationProduct#type}
    */
    readonly type?: string;
}
export class SourceConnectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceConnectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionParameters = this._connectionParameters?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConnectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionParameters.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionParameters.internalValue = value.connectionParameters;
            this._type = value.type;
        }
    }

    // connection_parameters - computed: true, optional: true, required: false
    private _connectionParameters = new ConnectionParametersPropertyOutputReference(this, "connection_parameters");
    public get connectionParameters() {
        return this._connectionParameters;
    }
    public putConnectionParameters(value: ConnectionParametersProperty) {
        this._connectionParameters.internalValue = value;
    }
    public resetConnectionParameters() {
        this._connectionParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionParametersInput() {
        return this._connectionParameters.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#key CcCloudFormationProduct#key}
    */
    readonly key?: string;
    /**
    * The tag value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#value CcCloudFormationProduct#value}
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
