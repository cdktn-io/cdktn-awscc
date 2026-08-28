// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_signing_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSigningConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Array of signing rules that define which repositories should be signed and with which signing profiles.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_signing_configuration#rules CcSigningConfiguration#rules}
    */
    readonly rules: CcSigningConfiguration.RuleProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_signing_configuration awscc_ecr_signing_configuration}
*/
export class CcSigningConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecr_signing_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSigningConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSigningConfiguration to import
    * @param importFromId The id of the existing CcSigningConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_signing_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSigningConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_signing_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_signing_configuration awscc_ecr_signing_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSigningConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcSigningConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecr_signing_configuration',
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
        this._rules.internalValue = config.rules;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
        return this.getStringAttribute('registry_id');
    }

    // rules - computed: false, optional: false, required: true
    private _rules = new CcSigningConfiguration.RulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: CcSigningConfiguration.RuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            rules: cdktn.listMapper(ccSigningConfigurationRulePropertyToTerraform, false)(this._rules.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            rules: {
                value: cdktn.listMapperHcl(ccSigningConfigurationRulePropertyToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSigningConfiguration.RulePropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSigningConfigurationRepositoryFilterPropertyToTerraform(struct?: CcSigningConfiguration.RepositoryFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter: cdktn.stringToTerraform(struct!.filter),
        filter_type: cdktn.stringToTerraform(struct!.filterType),
    }
}


export function ccSigningConfigurationRepositoryFilterPropertyToHclTerraform(struct?: CcSigningConfiguration.RepositoryFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter: {
            value: cdktn.stringToHclTerraform(struct!.filter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_type: {
            value: cdktn.stringToHclTerraform(struct!.filterType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSigningConfigurationRulePropertyToTerraform(struct?: CcSigningConfiguration.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_filters: cdktn.listMapper(ccSigningConfigurationRepositoryFilterPropertyToTerraform, false)(struct!.repositoryFilters),
        signing_profile_arn: cdktn.stringToTerraform(struct!.signingProfileArn),
    }
}


export function ccSigningConfigurationRulePropertyToHclTerraform(struct?: CcSigningConfiguration.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_filters: {
            value: cdktn.listMapperHcl(ccSigningConfigurationRepositoryFilterPropertyToHclTerraform, false)(struct!.repositoryFilters),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryFilterPropertyList",
        },
        signing_profile_arn: {
            value: cdktn.stringToHclTerraform(struct!.signingProfileArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSigningConfiguration {
export interface RepositoryFilterProperty {
    /**
    * Repository name pattern (supports '*' wildcard).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_signing_configuration#filter CcSigningConfiguration#filter}
    */
    readonly filter?: string;
    /**
    * Type of repository filter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_signing_configuration#filter_type CcSigningConfiguration#filter_type}
    */
    readonly filterType?: string;
}
export class RepositoryFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RepositoryFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filter !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter;
        }
        if (this._filterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterType = this._filterType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepositoryFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filter = undefined;
            this._filterType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filter = value.filter;
            this._filterType = value.filterType;
        }
    }

    // filter - computed: true, optional: true, required: false
    private _filter?: string; 
    public get filter() {
        return this.getStringAttribute('filter');
    }
    public set filter(value: string) {
        this._filter = value;
    }
    public resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter;
    }

    // filter_type - computed: true, optional: true, required: false
    private _filterType?: string; 
    public get filterType() {
        return this.getStringAttribute('filter_type');
    }
    public set filterType(value: string) {
        this._filterType = value;
    }
    public resetFilterType() {
        this._filterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterTypeInput() {
        return this._filterType;
    }
}

export class RepositoryFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : RepositoryFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): RepositoryFilterPropertyOutputReference {
        return new RepositoryFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RuleProperty {
    /**
    * Optional array of repository filters. If omitted, the rule matches all repositories. If provided, must contain at least one filter. Empty arrays are not allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_signing_configuration#repository_filters CcSigningConfiguration#repository_filters}
    */
    readonly repositoryFilters?: RepositoryFilterProperty[] | cdktn.IResolvable;
    /**
    * AWS Signer signing profile ARN to use for matched repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_signing_configuration#signing_profile_arn CcSigningConfiguration#signing_profile_arn}
    */
    readonly signingProfileArn: string;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryFilters = this._repositoryFilters?.internalValue;
        }
        if (this._signingProfileArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.signingProfileArn = this._signingProfileArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryFilters.internalValue = undefined;
            this._signingProfileArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryFilters.internalValue = value.repositoryFilters;
            this._signingProfileArn = value.signingProfileArn;
        }
    }

    // repository_filters - computed: true, optional: true, required: false
    private _repositoryFilters = new RepositoryFilterPropertyList(this, "repository_filters", false);
    public get repositoryFilters() {
        return this._repositoryFilters;
    }
    public putRepositoryFilters(value: RepositoryFilterProperty[] | cdktn.IResolvable) {
        this._repositoryFilters.internalValue = value;
    }
    public resetRepositoryFilters() {
        this._repositoryFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryFiltersInput() {
        return this._repositoryFilters.internalValue;
    }

    // signing_profile_arn - computed: false, optional: false, required: true
    private _signingProfileArn?: string; 
    public get signingProfileArn() {
        return this.getStringAttribute('signing_profile_arn');
    }
    public set signingProfileArn(value: string) {
        this._signingProfileArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get signingProfileArnInput() {
        return this._signingProfileArn;
    }
}

export class RulePropertyList extends cdktn.ComplexList {
    public internalValue? : RuleProperty[] | cdktn.IResolvable

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
    public get(index: number): RulePropertyOutputReference {
        return new RulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
