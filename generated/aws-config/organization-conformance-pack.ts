// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOrganizationConformancePackProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of ConformancePackInputParameter objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#conformance_pack_input_parameters CcOrganizationConformancePack#conformance_pack_input_parameters}
    */
    readonly conformancePackInputParameters?: CcOrganizationConformancePack.ConformancePackInputParameterProperty[] | cdktn.IResolvable;
    /**
    * AWS Config stores intermediate files while processing conformance pack template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#delivery_s3_bucket CcOrganizationConformancePack#delivery_s3_bucket}
    */
    readonly deliveryS3Bucket?: string;
    /**
    * The prefix for the delivery S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix CcOrganizationConformancePack#delivery_s3_key_prefix}
    */
    readonly deliveryS3KeyPrefix?: string;
    /**
    * A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#excluded_accounts CcOrganizationConformancePack#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * The name of the organization conformance pack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#organization_conformance_pack_name CcOrganizationConformancePack#organization_conformance_pack_name}
    */
    readonly organizationConformancePackName: string;
    /**
    * The tags for the organization conformance pack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#tags CcOrganizationConformancePack#tags}
    */
    readonly tags?: CcOrganizationConformancePack.TagProperty[] | cdktn.IResolvable;
    /**
    * A string containing full conformance pack template body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#template_body CcOrganizationConformancePack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Location of file containing the template body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#template_s3_uri CcOrganizationConformancePack#template_s3_uri}
    */
    readonly templateS3Uri?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack awscc_config_organization_conformance_pack}
*/
export class CcOrganizationConformancePack extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_config_organization_conformance_pack";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOrganizationConformancePack resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOrganizationConformancePack to import
    * @param importFromId The id of the existing CcOrganizationConformancePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOrganizationConformancePack to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_organization_conformance_pack", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack awscc_config_organization_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOrganizationConformancePackProps
    */
    public constructor(scope: Construct, id: string, config: CcOrganizationConformancePackProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_config_organization_conformance_pack',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._conformancePackInputParameters.internalValue = config.conformancePackInputParameters;
        this._deliveryS3Bucket = config.deliveryS3Bucket;
        this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
        this._excludedAccounts = config.excludedAccounts;
        this._organizationConformancePackName = config.organizationConformancePackName;
        this._tags.internalValue = config.tags;
        this._templateBody = config.templateBody;
        this._templateS3Uri = config.templateS3Uri;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // conformance_pack_input_parameters - computed: true, optional: true, required: false
    private _conformancePackInputParameters = new CcOrganizationConformancePack.ConformancePackInputParameterPropertyList(this, "conformance_pack_input_parameters", false);
    public get conformancePackInputParameters() {
        return this._conformancePackInputParameters;
    }
    public putConformancePackInputParameters(value: CcOrganizationConformancePack.ConformancePackInputParameterProperty[] | cdktn.IResolvable) {
        this._conformancePackInputParameters.internalValue = value;
    }
    public resetConformancePackInputParameters() {
        this._conformancePackInputParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conformancePackInputParametersInput() {
        return this._conformancePackInputParameters.internalValue;
    }

    // delivery_s3_bucket - computed: true, optional: true, required: false
    private _deliveryS3Bucket?: string; 
    public get deliveryS3Bucket() {
        return this.getStringAttribute('delivery_s3_bucket');
    }
    public set deliveryS3Bucket(value: string) {
        this._deliveryS3Bucket = value;
    }
    public resetDeliveryS3Bucket() {
        this._deliveryS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3BucketInput() {
        return this._deliveryS3Bucket;
    }

    // delivery_s3_key_prefix - computed: true, optional: true, required: false
    private _deliveryS3KeyPrefix?: string; 
    public get deliveryS3KeyPrefix() {
        return this.getStringAttribute('delivery_s3_key_prefix');
    }
    public set deliveryS3KeyPrefix(value: string) {
        this._deliveryS3KeyPrefix = value;
    }
    public resetDeliveryS3KeyPrefix() {
        this._deliveryS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3KeyPrefixInput() {
        return this._deliveryS3KeyPrefix;
    }

    // excluded_accounts - computed: true, optional: true, required: false
    private _excludedAccounts?: string[]; 
    public get excludedAccounts() {
        return this.getListAttribute('excluded_accounts');
    }
    public set excludedAccounts(value: string[]) {
        this._excludedAccounts = value;
    }
    public resetExcludedAccounts() {
        this._excludedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedAccountsInput() {
        return this._excludedAccounts;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // organization_conformance_pack_arn - computed: true, optional: false, required: false
    public get organizationConformancePackArn() {
        return this.getStringAttribute('organization_conformance_pack_arn');
    }

    // organization_conformance_pack_name - computed: false, optional: false, required: true
    private _organizationConformancePackName?: string; 
    public get organizationConformancePackName() {
        return this.getStringAttribute('organization_conformance_pack_name');
    }
    public set organizationConformancePackName(value: string) {
        this._organizationConformancePackName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationConformancePackNameInput() {
        return this._organizationConformancePackName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcOrganizationConformancePack.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcOrganizationConformancePack.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string; 
    public get templateBody() {
        return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string) {
        this._templateBody = value;
    }
    public resetTemplateBody() {
        this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
        return this._templateBody;
    }

    // template_s3_uri - computed: true, optional: true, required: false
    private _templateS3Uri?: string; 
    public get templateS3Uri() {
        return this.getStringAttribute('template_s3_uri');
    }
    public set templateS3Uri(value: string) {
        this._templateS3Uri = value;
    }
    public resetTemplateS3Uri() {
        this._templateS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateS3UriInput() {
        return this._templateS3Uri;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            conformance_pack_input_parameters: cdktn.listMapper(ccOrganizationConformancePackConformancePackInputParameterPropertyToTerraform, false)(this._conformancePackInputParameters.internalValue),
            delivery_s3_bucket: cdktn.stringToTerraform(this._deliveryS3Bucket),
            delivery_s3_key_prefix: cdktn.stringToTerraform(this._deliveryS3KeyPrefix),
            excluded_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._excludedAccounts),
            organization_conformance_pack_name: cdktn.stringToTerraform(this._organizationConformancePackName),
            tags: cdktn.listMapper(ccOrganizationConformancePackTagPropertyToTerraform, false)(this._tags.internalValue),
            template_body: cdktn.stringToTerraform(this._templateBody),
            template_s3_uri: cdktn.stringToTerraform(this._templateS3Uri),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            conformance_pack_input_parameters: {
                value: cdktn.listMapperHcl(ccOrganizationConformancePackConformancePackInputParameterPropertyToHclTerraform, false)(this._conformancePackInputParameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOrganizationConformancePack.ConformancePackInputParameterPropertyList",
            },
            delivery_s3_bucket: {
                value: cdktn.stringToHclTerraform(this._deliveryS3Bucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delivery_s3_key_prefix: {
                value: cdktn.stringToHclTerraform(this._deliveryS3KeyPrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            excluded_accounts: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._excludedAccounts),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            organization_conformance_pack_name: {
                value: cdktn.stringToHclTerraform(this._organizationConformancePackName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccOrganizationConformancePackTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOrganizationConformancePack.TagPropertyList",
            },
            template_body: {
                value: cdktn.stringToHclTerraform(this._templateBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_s3_uri: {
                value: cdktn.stringToHclTerraform(this._templateS3Uri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOrganizationConformancePackConformancePackInputParameterPropertyToTerraform(struct?: CcOrganizationConformancePack.ConformancePackInputParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_name: cdktn.stringToTerraform(struct!.parameterName),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccOrganizationConformancePackConformancePackInputParameterPropertyToHclTerraform(struct?: CcOrganizationConformancePack.ConformancePackInputParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.parameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationConformancePackTagPropertyToTerraform(struct?: CcOrganizationConformancePack.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccOrganizationConformancePackTagPropertyToHclTerraform(struct?: CcOrganizationConformancePack.TagProperty | cdktn.IResolvable): any {
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


export namespace CcOrganizationConformancePack {
export interface ConformancePackInputParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#parameter_name CcOrganizationConformancePack#parameter_name}
    */
    readonly parameterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#parameter_value CcOrganizationConformancePack#parameter_value}
    */
    readonly parameterValue?: string;
}
export class ConformancePackInputParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConformancePackInputParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterName = this._parameterName;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConformancePackInputParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterName = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterName = value.parameterName;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_name - computed: true, optional: true, required: false
    private _parameterName?: string; 
    public get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    public set parameterName(value: string) {
        this._parameterName = value;
    }
    public resetParameterName() {
        this._parameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameInput() {
        return this._parameterName;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class ConformancePackInputParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : ConformancePackInputParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): ConformancePackInputParameterPropertyOutputReference {
        return new ConformancePackInputParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#key CcOrganizationConformancePack#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#value CcOrganizationConformancePack#value}
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
