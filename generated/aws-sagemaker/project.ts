// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProjectProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#project_description CcProject#project_description}
    */
    readonly projectDescription?: string;
    /**
    * The name of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#project_name CcProject#project_name}
    */
    readonly projectName: string;
    /**
    * Provisioned ServiceCatalog  Details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#service_catalog_provisioned_product_details CcProject#service_catalog_provisioned_product_details}
    */
    readonly serviceCatalogProvisionedProductDetails?: CcProject.ServiceCatalogProvisionedProductDetailsProperty;
    /**
    * Input ServiceCatalog Provisioning Details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#service_catalog_provisioning_details CcProject#service_catalog_provisioning_details}
    */
    readonly serviceCatalogProvisioningDetails?: CcProject.ServiceCatalogProvisioningDetailsProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#tags CcProject#tags}
    */
    readonly tags?: CcProject.TagProperty[] | cdktn.IResolvable;
    /**
    * An array of template providers associated with the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#template_provider_details CcProject#template_provider_details}
    */
    readonly templateProviderDetails?: CcProject.TemplateProviderDetailProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project awscc_sagemaker_project}
*/
export class CcProject extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_project";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProject resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProject to import
    * @param importFromId The id of the existing CcProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProject to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_project", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project awscc_sagemaker_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProjectProps
    */
    public constructor(scope: Construct, id: string, config: CcProjectProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_project',
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
        this._projectDescription = config.projectDescription;
        this._projectName = config.projectName;
        this._serviceCatalogProvisionedProductDetails.internalValue = config.serviceCatalogProvisionedProductDetails;
        this._serviceCatalogProvisioningDetails.internalValue = config.serviceCatalogProvisioningDetails;
        this._tags.internalValue = config.tags;
        this._templateProviderDetails.internalValue = config.templateProviderDetails;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // project_arn - computed: true, optional: false, required: false
    public get projectArn() {
        return this.getStringAttribute('project_arn');
    }

    // project_description - computed: true, optional: true, required: false
    private _projectDescription?: string; 
    public get projectDescription() {
        return this.getStringAttribute('project_description');
    }
    public set projectDescription(value: string) {
        this._projectDescription = value;
    }
    public resetProjectDescription() {
        this._projectDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectDescriptionInput() {
        return this._projectDescription;
    }

    // project_id - computed: true, optional: false, required: false
    public get projectId() {
        return this.getStringAttribute('project_id');
    }

    // project_name - computed: false, optional: false, required: true
    private _projectName?: string; 
    public get projectName() {
        return this.getStringAttribute('project_name');
    }
    public set projectName(value: string) {
        this._projectName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get projectNameInput() {
        return this._projectName;
    }

    // project_status - computed: true, optional: false, required: false
    public get projectStatus() {
        return this.getStringAttribute('project_status');
    }

    // service_catalog_provisioned_product_details - computed: true, optional: true, required: false
    private _serviceCatalogProvisionedProductDetails = new CcProject.ServiceCatalogProvisionedProductDetailsPropertyOutputReference(this, "service_catalog_provisioned_product_details");
    public get serviceCatalogProvisionedProductDetails() {
        return this._serviceCatalogProvisionedProductDetails;
    }
    public putServiceCatalogProvisionedProductDetails(value: CcProject.ServiceCatalogProvisionedProductDetailsProperty) {
        this._serviceCatalogProvisionedProductDetails.internalValue = value;
    }
    public resetServiceCatalogProvisionedProductDetails() {
        this._serviceCatalogProvisionedProductDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceCatalogProvisionedProductDetailsInput() {
        return this._serviceCatalogProvisionedProductDetails.internalValue;
    }

    // service_catalog_provisioning_details - computed: true, optional: true, required: false
    private _serviceCatalogProvisioningDetails = new CcProject.ServiceCatalogProvisioningDetailsPropertyOutputReference(this, "service_catalog_provisioning_details");
    public get serviceCatalogProvisioningDetails() {
        return this._serviceCatalogProvisioningDetails;
    }
    public putServiceCatalogProvisioningDetails(value: CcProject.ServiceCatalogProvisioningDetailsProperty) {
        this._serviceCatalogProvisioningDetails.internalValue = value;
    }
    public resetServiceCatalogProvisioningDetails() {
        this._serviceCatalogProvisioningDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceCatalogProvisioningDetailsInput() {
        return this._serviceCatalogProvisioningDetails.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProject.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProject.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_provider_details - computed: true, optional: true, required: false
    private _templateProviderDetails = new CcProject.TemplateProviderDetailPropertyList(this, "template_provider_details", false);
    public get templateProviderDetails() {
        return this._templateProviderDetails;
    }
    public putTemplateProviderDetails(value: CcProject.TemplateProviderDetailProperty[] | cdktn.IResolvable) {
        this._templateProviderDetails.internalValue = value;
    }
    public resetTemplateProviderDetails() {
        this._templateProviderDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateProviderDetailsInput() {
        return this._templateProviderDetails.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            project_description: cdktn.stringToTerraform(this._projectDescription),
            project_name: cdktn.stringToTerraform(this._projectName),
            service_catalog_provisioned_product_details: ccProjectServiceCatalogProvisionedProductDetailsPropertyToTerraform(this._serviceCatalogProvisionedProductDetails.internalValue),
            service_catalog_provisioning_details: ccProjectServiceCatalogProvisioningDetailsPropertyToTerraform(this._serviceCatalogProvisioningDetails.internalValue),
            tags: cdktn.listMapper(ccProjectTagPropertyToTerraform, false)(this._tags.internalValue),
            template_provider_details: cdktn.listMapper(ccProjectTemplateProviderDetailPropertyToTerraform, false)(this._templateProviderDetails.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            project_description: {
                value: cdktn.stringToHclTerraform(this._projectDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_name: {
                value: cdktn.stringToHclTerraform(this._projectName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_catalog_provisioned_product_details: {
                value: ccProjectServiceCatalogProvisionedProductDetailsPropertyToHclTerraform(this._serviceCatalogProvisionedProductDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProject.ServiceCatalogProvisionedProductDetailsProperty",
            },
            service_catalog_provisioning_details: {
                value: ccProjectServiceCatalogProvisioningDetailsPropertyToHclTerraform(this._serviceCatalogProvisioningDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProject.ServiceCatalogProvisioningDetailsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProjectTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProject.TagPropertyList",
            },
            template_provider_details: {
                value: cdktn.listMapperHcl(ccProjectTemplateProviderDetailPropertyToHclTerraform, false)(this._templateProviderDetails.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProject.TemplateProviderDetailPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProjectServiceCatalogProvisionedProductDetailsPropertyToTerraform(struct?: CcProject.ServiceCatalogProvisionedProductDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        provisioned_product_id: cdktn.stringToTerraform(struct!.provisionedProductId),
        provisioned_product_status_message: cdktn.stringToTerraform(struct!.provisionedProductStatusMessage),
    }
}


export function ccProjectServiceCatalogProvisionedProductDetailsPropertyToHclTerraform(struct?: CcProject.ServiceCatalogProvisionedProductDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        provisioned_product_id: {
            value: cdktn.stringToHclTerraform(struct!.provisionedProductId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provisioned_product_status_message: {
            value: cdktn.stringToHclTerraform(struct!.provisionedProductStatusMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProjectProvisioningParameterPropertyToTerraform(struct?: CcProject.ProvisioningParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProjectProvisioningParameterPropertyToHclTerraform(struct?: CcProject.ProvisioningParameterProperty | cdktn.IResolvable): any {
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


export function ccProjectServiceCatalogProvisioningDetailsPropertyToTerraform(struct?: CcProject.ServiceCatalogProvisioningDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        path_id: cdktn.stringToTerraform(struct!.pathId),
        product_id: cdktn.stringToTerraform(struct!.productId),
        provisioning_artifact_id: cdktn.stringToTerraform(struct!.provisioningArtifactId),
        provisioning_parameters: cdktn.listMapper(ccProjectProvisioningParameterPropertyToTerraform, false)(struct!.provisioningParameters),
    }
}


export function ccProjectServiceCatalogProvisioningDetailsPropertyToHclTerraform(struct?: CcProject.ServiceCatalogProvisioningDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        path_id: {
            value: cdktn.stringToHclTerraform(struct!.pathId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        product_id: {
            value: cdktn.stringToHclTerraform(struct!.productId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provisioning_artifact_id: {
            value: cdktn.stringToHclTerraform(struct!.provisioningArtifactId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provisioning_parameters: {
            value: cdktn.listMapperHcl(ccProjectProvisioningParameterPropertyToHclTerraform, false)(struct!.provisioningParameters),
            isBlock: true,
            type: "list",
            storageClassType: "ProvisioningParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProjectTagPropertyToTerraform(struct?: CcProject.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProjectTagPropertyToHclTerraform(struct?: CcProject.TagProperty | cdktn.IResolvable): any {
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


export function ccProjectCfnStackParameterPropertyToTerraform(struct?: CcProject.CfnStackParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProjectCfnStackParameterPropertyToHclTerraform(struct?: CcProject.CfnStackParameterProperty | cdktn.IResolvable): any {
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


export function ccProjectCfnTemplateProviderDetailPropertyToTerraform(struct?: CcProject.CfnTemplateProviderDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameters: cdktn.listMapper(ccProjectCfnStackParameterPropertyToTerraform, false)(struct!.parameters),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        template_name: cdktn.stringToTerraform(struct!.templateName),
        template_url: cdktn.stringToTerraform(struct!.templateUrl),
    }
}


export function ccProjectCfnTemplateProviderDetailPropertyToHclTerraform(struct?: CcProject.CfnTemplateProviderDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameters: {
            value: cdktn.listMapperHcl(ccProjectCfnStackParameterPropertyToHclTerraform, false)(struct!.parameters),
            isBlock: true,
            type: "list",
            storageClassType: "CfnStackParameterPropertyList",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template_name: {
            value: cdktn.stringToHclTerraform(struct!.templateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template_url: {
            value: cdktn.stringToHclTerraform(struct!.templateUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProjectTemplateProviderDetailPropertyToTerraform(struct?: CcProject.TemplateProviderDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cfn_template_provider_detail: ccProjectCfnTemplateProviderDetailPropertyToTerraform(struct!.cfnTemplateProviderDetail),
    }
}


export function ccProjectTemplateProviderDetailPropertyToHclTerraform(struct?: CcProject.TemplateProviderDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cfn_template_provider_detail: {
            value: ccProjectCfnTemplateProviderDetailPropertyToHclTerraform(struct!.cfnTemplateProviderDetail),
            isBlock: true,
            type: "struct",
            storageClassType: "CfnTemplateProviderDetailProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcProject {
export interface ServiceCatalogProvisionedProductDetailsProperty {
    /**
    * The identifier of the provisioning artifact (also known as a version).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#provisioned_product_id CcProject#provisioned_product_id}
    */
    readonly provisionedProductId?: string;
    /**
    * Provisioned Product Status Message
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#provisioned_product_status_message CcProject#provisioned_product_status_message}
    */
    readonly provisionedProductStatusMessage?: string;
}
export class ServiceCatalogProvisionedProductDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceCatalogProvisionedProductDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._provisionedProductId !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedProductId = this._provisionedProductId;
        }
        if (this._provisionedProductStatusMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedProductStatusMessage = this._provisionedProductStatusMessage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceCatalogProvisionedProductDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._provisionedProductId = undefined;
            this._provisionedProductStatusMessage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._provisionedProductId = value.provisionedProductId;
            this._provisionedProductStatusMessage = value.provisionedProductStatusMessage;
        }
    }

    // provisioned_product_id - computed: true, optional: true, required: false
    private _provisionedProductId?: string; 
    public get provisionedProductId() {
        return this.getStringAttribute('provisioned_product_id');
    }
    public set provisionedProductId(value: string) {
        this._provisionedProductId = value;
    }
    public resetProvisionedProductId() {
        this._provisionedProductId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedProductIdInput() {
        return this._provisionedProductId;
    }

    // provisioned_product_status_message - computed: true, optional: true, required: false
    private _provisionedProductStatusMessage?: string; 
    public get provisionedProductStatusMessage() {
        return this.getStringAttribute('provisioned_product_status_message');
    }
    public set provisionedProductStatusMessage(value: string) {
        this._provisionedProductStatusMessage = value;
    }
    public resetProvisionedProductStatusMessage() {
        this._provisionedProductStatusMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedProductStatusMessageInput() {
        return this._provisionedProductStatusMessage;
    }
}
export interface ProvisioningParameterProperty {
    /**
    * The parameter key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#key CcProject#key}
    */
    readonly key?: string;
    /**
    * The parameter value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#value CcProject#value}
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
export interface ServiceCatalogProvisioningDetailsProperty {
    /**
    * The path identifier of the product.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#path_id CcProject#path_id}
    */
    readonly pathId?: string;
    /**
    * Service Catalog product identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#product_id CcProject#product_id}
    */
    readonly productId?: string;
    /**
    * The identifier of the provisioning artifact (also known as a version).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#provisioning_artifact_id CcProject#provisioning_artifact_id}
    */
    readonly provisioningArtifactId?: string;
    /**
    * Parameters specified by the administrator that are required for provisioning the product.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#provisioning_parameters CcProject#provisioning_parameters}
    */
    readonly provisioningParameters?: ProvisioningParameterProperty[] | cdktn.IResolvable;
}
export class ServiceCatalogProvisioningDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceCatalogProvisioningDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pathId !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathId = this._pathId;
        }
        if (this._productId !== undefined) {
            hasAnyValues = true;
            internalValueResult.productId = this._productId;
        }
        if (this._provisioningArtifactId !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisioningArtifactId = this._provisioningArtifactId;
        }
        if (this._provisioningParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisioningParameters = this._provisioningParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceCatalogProvisioningDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pathId = undefined;
            this._productId = undefined;
            this._provisioningArtifactId = undefined;
            this._provisioningParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pathId = value.pathId;
            this._productId = value.productId;
            this._provisioningArtifactId = value.provisioningArtifactId;
            this._provisioningParameters.internalValue = value.provisioningParameters;
        }
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

    // provisioning_parameters - computed: true, optional: true, required: false
    private _provisioningParameters = new ProvisioningParameterPropertyList(this, "provisioning_parameters", false);
    public get provisioningParameters() {
        return this._provisioningParameters;
    }
    public putProvisioningParameters(value: ProvisioningParameterProperty[] | cdktn.IResolvable) {
        this._provisioningParameters.internalValue = value;
    }
    public resetProvisioningParameters() {
        this._provisioningParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningParametersInput() {
        return this._provisioningParameters.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#key CcProject#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#value CcProject#value}
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
export interface CfnStackParameterProperty {
    /**
    * The key of the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#key CcProject#key}
    */
    readonly key?: string;
    /**
    * The value of the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#value CcProject#value}
    */
    readonly value?: string;
}
export class CfnStackParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CfnStackParameterProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CfnStackParameterProperty | cdktn.IResolvable | undefined) {
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

export class CfnStackParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : CfnStackParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): CfnStackParameterPropertyOutputReference {
        return new CfnStackParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CfnTemplateProviderDetailProperty {
    /**
    * A list of parameters used in the CloudFormation template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#parameters CcProject#parameters}
    */
    readonly parameters?: CfnStackParameterProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the IAM role used by the template provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#role_arn CcProject#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The name of the template used for the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#template_name CcProject#template_name}
    */
    readonly templateName?: string;
    /**
    * The URL of the CloudFormation template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#template_url CcProject#template_url}
    */
    readonly templateUrl?: string;
}
export class CfnTemplateProviderDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CfnTemplateProviderDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._templateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateName = this._templateName;
        }
        if (this._templateUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateUrl = this._templateUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CfnTemplateProviderDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameters.internalValue = undefined;
            this._roleArn = undefined;
            this._templateName = undefined;
            this._templateUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameters.internalValue = value.parameters;
            this._roleArn = value.roleArn;
            this._templateName = value.templateName;
            this._templateUrl = value.templateUrl;
        }
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters = new CfnStackParameterPropertyList(this, "parameters", false);
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: CfnStackParameterProperty[] | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // template_name - computed: true, optional: true, required: false
    private _templateName?: string; 
    public get templateName() {
        return this.getStringAttribute('template_name');
    }
    public set templateName(value: string) {
        this._templateName = value;
    }
    public resetTemplateName() {
        this._templateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateNameInput() {
        return this._templateName;
    }

    // template_url - computed: true, optional: true, required: false
    private _templateUrl?: string; 
    public get templateUrl() {
        return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string) {
        this._templateUrl = value;
    }
    public resetTemplateUrl() {
        this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
        return this._templateUrl;
    }
}
export interface TemplateProviderDetailProperty {
    /**
    * CloudFormation template provider details for a SageMaker project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_project#cfn_template_provider_detail CcProject#cfn_template_provider_detail}
    */
    readonly cfnTemplateProviderDetail?: CfnTemplateProviderDetailProperty;
}
export class TemplateProviderDetailPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TemplateProviderDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cfnTemplateProviderDetail?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cfnTemplateProviderDetail = this._cfnTemplateProviderDetail?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateProviderDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cfnTemplateProviderDetail.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cfnTemplateProviderDetail.internalValue = value.cfnTemplateProviderDetail;
        }
    }

    // cfn_template_provider_detail - computed: true, optional: true, required: false
    private _cfnTemplateProviderDetail = new CfnTemplateProviderDetailPropertyOutputReference(this, "cfn_template_provider_detail");
    public get cfnTemplateProviderDetail() {
        return this._cfnTemplateProviderDetail;
    }
    public putCfnTemplateProviderDetail(value: CfnTemplateProviderDetailProperty) {
        this._cfnTemplateProviderDetail.internalValue = value;
    }
    public resetCfnTemplateProviderDetail() {
        this._cfnTemplateProviderDetail.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cfnTemplateProviderDetailInput() {
        return this._cfnTemplateProviderDetail.internalValue;
    }
}

export class TemplateProviderDetailPropertyList extends cdktn.ComplexList {
    public internalValue? : TemplateProviderDetailProperty[] | cdktn.IResolvable

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
    public get(index: number): TemplateProviderDetailPropertyOutputReference {
        return new TemplateProviderDetailPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
