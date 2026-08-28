// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigurationAggregatorProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#account_aggregation_sources CcConfigurationAggregator#account_aggregation_sources}
    */
    readonly accountAggregationSources?: CcConfigurationAggregator.AccountAggregationSourceProperty[] | cdktn.IResolvable;
    /**
    * The name of the aggregator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#configuration_aggregator_name CcConfigurationAggregator#configuration_aggregator_name}
    */
    readonly configurationAggregatorName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#organization_aggregation_source CcConfigurationAggregator#organization_aggregation_source}
    */
    readonly organizationAggregationSource?: CcConfigurationAggregator.OrganizationAggregationSourceProperty;
    /**
    * The tags for the configuration aggregator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#tags CcConfigurationAggregator#tags}
    */
    readonly tags?: CcConfigurationAggregator.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator awscc_config_configuration_aggregator}
*/
export class CcConfigurationAggregator extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_config_configuration_aggregator";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfigurationAggregator resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfigurationAggregator to import
    * @param importFromId The id of the existing CcConfigurationAggregator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfigurationAggregator to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_configuration_aggregator", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator awscc_config_configuration_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigurationAggregatorProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcConfigurationAggregatorProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_config_configuration_aggregator',
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
        this._accountAggregationSources.internalValue = config.accountAggregationSources;
        this._configurationAggregatorName = config.configurationAggregatorName;
        this._organizationAggregationSource.internalValue = config.organizationAggregationSource;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_aggregation_sources - computed: true, optional: true, required: false
    private _accountAggregationSources = new CcConfigurationAggregator.AccountAggregationSourcePropertyList(this, "account_aggregation_sources", false);
    public get accountAggregationSources() {
        return this._accountAggregationSources;
    }
    public putAccountAggregationSources(value: CcConfigurationAggregator.AccountAggregationSourceProperty[] | cdktn.IResolvable) {
        this._accountAggregationSources.internalValue = value;
    }
    public resetAccountAggregationSources() {
        this._accountAggregationSources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountAggregationSourcesInput() {
        return this._accountAggregationSources.internalValue;
    }

    // configuration_aggregator_arn - computed: true, optional: false, required: false
    public get configurationAggregatorArn() {
        return this.getStringAttribute('configuration_aggregator_arn');
    }

    // configuration_aggregator_name - computed: true, optional: true, required: false
    private _configurationAggregatorName?: string; 
    public get configurationAggregatorName() {
        return this.getStringAttribute('configuration_aggregator_name');
    }
    public set configurationAggregatorName(value: string) {
        this._configurationAggregatorName = value;
    }
    public resetConfigurationAggregatorName() {
        this._configurationAggregatorName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationAggregatorNameInput() {
        return this._configurationAggregatorName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // organization_aggregation_source - computed: true, optional: true, required: false
    private _organizationAggregationSource = new CcConfigurationAggregator.OrganizationAggregationSourcePropertyOutputReference(this, "organization_aggregation_source");
    public get organizationAggregationSource() {
        return this._organizationAggregationSource;
    }
    public putOrganizationAggregationSource(value: CcConfigurationAggregator.OrganizationAggregationSourceProperty) {
        this._organizationAggregationSource.internalValue = value;
    }
    public resetOrganizationAggregationSource() {
        this._organizationAggregationSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationAggregationSourceInput() {
        return this._organizationAggregationSource.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfigurationAggregator.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfigurationAggregator.TagProperty[] | cdktn.IResolvable) {
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
            account_aggregation_sources: cdktn.listMapper(ccConfigurationAggregatorAccountAggregationSourcePropertyToTerraform, false)(this._accountAggregationSources.internalValue),
            configuration_aggregator_name: cdktn.stringToTerraform(this._configurationAggregatorName),
            organization_aggregation_source: ccConfigurationAggregatorOrganizationAggregationSourcePropertyToTerraform(this._organizationAggregationSource.internalValue),
            tags: cdktn.listMapper(ccConfigurationAggregatorTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_aggregation_sources: {
                value: cdktn.listMapperHcl(ccConfigurationAggregatorAccountAggregationSourcePropertyToHclTerraform, false)(this._accountAggregationSources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigurationAggregator.AccountAggregationSourcePropertyList",
            },
            configuration_aggregator_name: {
                value: cdktn.stringToHclTerraform(this._configurationAggregatorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization_aggregation_source: {
                value: ccConfigurationAggregatorOrganizationAggregationSourcePropertyToHclTerraform(this._organizationAggregationSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationAggregator.OrganizationAggregationSourceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConfigurationAggregatorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigurationAggregator.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigurationAggregatorAccountAggregationSourcePropertyToTerraform(struct?: CcConfigurationAggregator.AccountAggregationSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
        all_aws_regions: cdktn.booleanToTerraform(struct!.allAwsRegions),
        aws_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.awsRegions),
    }
}


export function ccConfigurationAggregatorAccountAggregationSourcePropertyToHclTerraform(struct?: CcConfigurationAggregator.AccountAggregationSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        all_aws_regions: {
            value: cdktn.booleanToHclTerraform(struct!.allAwsRegions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        aws_regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.awsRegions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationAggregatorOrganizationAggregationSourcePropertyToTerraform(struct?: CcConfigurationAggregator.OrganizationAggregationSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        all_aws_regions: cdktn.booleanToTerraform(struct!.allAwsRegions),
        aws_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.awsRegions),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccConfigurationAggregatorOrganizationAggregationSourcePropertyToHclTerraform(struct?: CcConfigurationAggregator.OrganizationAggregationSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        all_aws_regions: {
            value: cdktn.booleanToHclTerraform(struct!.allAwsRegions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        aws_regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.awsRegions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationAggregatorTagPropertyToTerraform(struct?: CcConfigurationAggregator.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfigurationAggregatorTagPropertyToHclTerraform(struct?: CcConfigurationAggregator.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConfigurationAggregator {
export interface AccountAggregationSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#account_ids CcConfigurationAggregator#account_ids}
    */
    readonly accountIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#all_aws_regions CcConfigurationAggregator#all_aws_regions}
    */
    readonly allAwsRegions?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#aws_regions CcConfigurationAggregator#aws_regions}
    */
    readonly awsRegions?: string[];
}
export class AccountAggregationSourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccountAggregationSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountIds = this._accountIds;
        }
        if (this._allAwsRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.allAwsRegions = this._allAwsRegions;
        }
        if (this._awsRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegions = this._awsRegions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccountAggregationSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountIds = undefined;
            this._allAwsRegions = undefined;
            this._awsRegions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountIds = value.accountIds;
            this._allAwsRegions = value.allAwsRegions;
            this._awsRegions = value.awsRegions;
        }
    }

    // account_ids - computed: true, optional: true, required: false
    private _accountIds?: string[]; 
    public get accountIds() {
        return this.getListAttribute('account_ids');
    }
    public set accountIds(value: string[]) {
        this._accountIds = value;
    }
    public resetAccountIds() {
        this._accountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdsInput() {
        return this._accountIds;
    }

    // all_aws_regions - computed: true, optional: true, required: false
    private _allAwsRegions?: boolean | cdktn.IResolvable; 
    public get allAwsRegions() {
        return this.getBooleanAttribute('all_aws_regions');
    }
    public set allAwsRegions(value: boolean | cdktn.IResolvable) {
        this._allAwsRegions = value;
    }
    public resetAllAwsRegions() {
        this._allAwsRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allAwsRegionsInput() {
        return this._allAwsRegions;
    }

    // aws_regions - computed: true, optional: true, required: false
    private _awsRegions?: string[]; 
    public get awsRegions() {
        return this.getListAttribute('aws_regions');
    }
    public set awsRegions(value: string[]) {
        this._awsRegions = value;
    }
    public resetAwsRegions() {
        this._awsRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionsInput() {
        return this._awsRegions;
    }
}

export class AccountAggregationSourcePropertyList extends cdktn.ComplexList {
    public internalValue? : AccountAggregationSourceProperty[] | cdktn.IResolvable

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
    public get(index: number): AccountAggregationSourcePropertyOutputReference {
        return new AccountAggregationSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OrganizationAggregationSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#all_aws_regions CcConfigurationAggregator#all_aws_regions}
    */
    readonly allAwsRegions?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#aws_regions CcConfigurationAggregator#aws_regions}
    */
    readonly awsRegions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#role_arn CcConfigurationAggregator#role_arn}
    */
    readonly roleArn?: string;
}
export class OrganizationAggregationSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrganizationAggregationSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allAwsRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.allAwsRegions = this._allAwsRegions;
        }
        if (this._awsRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegions = this._awsRegions;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrganizationAggregationSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allAwsRegions = undefined;
            this._awsRegions = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allAwsRegions = value.allAwsRegions;
            this._awsRegions = value.awsRegions;
            this._roleArn = value.roleArn;
        }
    }

    // all_aws_regions - computed: true, optional: true, required: false
    private _allAwsRegions?: boolean | cdktn.IResolvable; 
    public get allAwsRegions() {
        return this.getBooleanAttribute('all_aws_regions');
    }
    public set allAwsRegions(value: boolean | cdktn.IResolvable) {
        this._allAwsRegions = value;
    }
    public resetAllAwsRegions() {
        this._allAwsRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allAwsRegionsInput() {
        return this._allAwsRegions;
    }

    // aws_regions - computed: true, optional: true, required: false
    private _awsRegions?: string[]; 
    public get awsRegions() {
        return this.getListAttribute('aws_regions');
    }
    public set awsRegions(value: string[]) {
        this._awsRegions = value;
    }
    public resetAwsRegions() {
        this._awsRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionsInput() {
        return this._awsRegions;
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
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#key CcConfigurationAggregator#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/config_configuration_aggregator#value CcConfigurationAggregator#value}
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
