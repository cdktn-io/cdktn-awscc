// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScraperProps extends cdktn.TerraformMetaArguments {
    /**
    * Scraper alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#alias CcScraper#alias}
    */
    readonly alias?: string;
    /**
    * Scraper metrics destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#destination CcScraper#destination}
    */
    readonly destination: CcScraper.DestinationProperty;
    /**
    * Role configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#role_configuration CcScraper#role_configuration}
    */
    readonly roleConfiguration?: CcScraper.RoleConfigurationProperty;
    /**
    * Scraper configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scrape_configuration CcScraper#scrape_configuration}
    */
    readonly scrapeConfiguration: CcScraper.ScrapeConfigurationProperty;
    /**
    * Configuration for scraper logging
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_logging_configuration CcScraper#scraper_logging_configuration}
    */
    readonly scraperLoggingConfiguration?: CcScraper.ScraperLoggingConfigurationProperty;
    /**
    * Scraper metrics source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source CcScraper#source}
    */
    readonly source: CcScraper.SourceProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#tags CcScraper#tags}
    */
    readonly tags?: CcScraper.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper awscc_aps_scraper}
*/
export class CcScraper extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_aps_scraper";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScraper resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScraper to import
    * @param importFromId The id of the existing CcScraper that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScraper to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_aps_scraper", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper awscc_aps_scraper} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScraperProps
    */
    public constructor(scope: Construct, id: string, config: CcScraperProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_aps_scraper',
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
        this._alias = config.alias;
        this._destination.internalValue = config.destination;
        this._roleConfiguration.internalValue = config.roleConfiguration;
        this._scrapeConfiguration.internalValue = config.scrapeConfiguration;
        this._scraperLoggingConfiguration.internalValue = config.scraperLoggingConfiguration;
        this._source.internalValue = config.source;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: true, optional: true, required: false
    private _alias?: string; 
    public get alias() {
        return this.getStringAttribute('alias');
    }
    public set alias(value: string) {
        this._alias = value;
    }
    public resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
        return this._alias;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // destination - computed: false, optional: false, required: true
    private _destination = new CcScraper.DestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: CcScraper.DestinationProperty) {
        this._destination.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // role_arn - computed: true, optional: false, required: false
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }

    // role_configuration - computed: true, optional: true, required: false
    private _roleConfiguration = new CcScraper.RoleConfigurationPropertyOutputReference(this, "role_configuration");
    public get roleConfiguration() {
        return this._roleConfiguration;
    }
    public putRoleConfiguration(value: CcScraper.RoleConfigurationProperty) {
        this._roleConfiguration.internalValue = value;
    }
    public resetRoleConfiguration() {
        this._roleConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleConfigurationInput() {
        return this._roleConfiguration.internalValue;
    }

    // scrape_configuration - computed: false, optional: false, required: true
    private _scrapeConfiguration = new CcScraper.ScrapeConfigurationPropertyOutputReference(this, "scrape_configuration");
    public get scrapeConfiguration() {
        return this._scrapeConfiguration;
    }
    public putScrapeConfiguration(value: CcScraper.ScrapeConfigurationProperty) {
        this._scrapeConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scrapeConfigurationInput() {
        return this._scrapeConfiguration.internalValue;
    }

    // scraper_id - computed: true, optional: false, required: false
    public get scraperId() {
        return this.getStringAttribute('scraper_id');
    }

    // scraper_logging_configuration - computed: true, optional: true, required: false
    private _scraperLoggingConfiguration = new CcScraper.ScraperLoggingConfigurationPropertyOutputReference(this, "scraper_logging_configuration");
    public get scraperLoggingConfiguration() {
        return this._scraperLoggingConfiguration;
    }
    public putScraperLoggingConfiguration(value: CcScraper.ScraperLoggingConfigurationProperty) {
        this._scraperLoggingConfiguration.internalValue = value;
    }
    public resetScraperLoggingConfiguration() {
        this._scraperLoggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scraperLoggingConfigurationInput() {
        return this._scraperLoggingConfiguration.internalValue;
    }

    // source - computed: false, optional: false, required: true
    private _source = new CcScraper.SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: CcScraper.SourceProperty) {
        this._source.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcScraper.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcScraper.TagProperty[] | cdktn.IResolvable) {
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
            alias: cdktn.stringToTerraform(this._alias),
            destination: ccScraperDestinationPropertyToTerraform(this._destination.internalValue),
            role_configuration: ccScraperRoleConfigurationPropertyToTerraform(this._roleConfiguration.internalValue),
            scrape_configuration: ccScraperScrapeConfigurationPropertyToTerraform(this._scrapeConfiguration.internalValue),
            scraper_logging_configuration: ccScraperScraperLoggingConfigurationPropertyToTerraform(this._scraperLoggingConfiguration.internalValue),
            source: ccScraperSourcePropertyToTerraform(this._source.internalValue),
            tags: cdktn.listMapper(ccScraperTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alias: {
                value: cdktn.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination: {
                value: ccScraperDestinationPropertyToHclTerraform(this._destination.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScraper.DestinationProperty",
            },
            role_configuration: {
                value: ccScraperRoleConfigurationPropertyToHclTerraform(this._roleConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScraper.RoleConfigurationProperty",
            },
            scrape_configuration: {
                value: ccScraperScrapeConfigurationPropertyToHclTerraform(this._scrapeConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScraper.ScrapeConfigurationProperty",
            },
            scraper_logging_configuration: {
                value: ccScraperScraperLoggingConfigurationPropertyToHclTerraform(this._scraperLoggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScraper.ScraperLoggingConfigurationProperty",
            },
            source: {
                value: ccScraperSourcePropertyToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScraper.SourceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccScraperTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcScraper.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScraperAmpConfigurationPropertyToTerraform(struct?: CcScraper.AmpConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        workspace_arn: cdktn.stringToTerraform(struct!.workspaceArn),
    }
}


export function ccScraperAmpConfigurationPropertyToHclTerraform(struct?: CcScraper.AmpConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        workspace_arn: {
            value: cdktn.stringToHclTerraform(struct!.workspaceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperCloudWatchConfigurationPropertyToTerraform(struct?: CcScraper.CloudWatchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dataset_arn: cdktn.stringToTerraform(struct!.datasetArn),
    }
}


export function ccScraperCloudWatchConfigurationPropertyToHclTerraform(struct?: CcScraper.CloudWatchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dataset_arn: {
            value: cdktn.stringToHclTerraform(struct!.datasetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperDestinationPropertyToTerraform(struct?: CcScraper.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amp_configuration: ccScraperAmpConfigurationPropertyToTerraform(struct!.ampConfiguration),
        cloudwatch_configuration: ccScraperCloudWatchConfigurationPropertyToTerraform(struct!.cloudwatchConfiguration),
    }
}


export function ccScraperDestinationPropertyToHclTerraform(struct?: CcScraper.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amp_configuration: {
            value: ccScraperAmpConfigurationPropertyToHclTerraform(struct!.ampConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AmpConfigurationProperty",
        },
        cloudwatch_configuration: {
            value: ccScraperCloudWatchConfigurationPropertyToHclTerraform(struct!.cloudwatchConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperRoleConfigurationPropertyToTerraform(struct?: CcScraper.RoleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_role_arn: cdktn.stringToTerraform(struct!.sourceRoleArn),
        target_role_arn: cdktn.stringToTerraform(struct!.targetRoleArn),
    }
}


export function ccScraperRoleConfigurationPropertyToHclTerraform(struct?: CcScraper.RoleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.sourceRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperScrapeConfigurationPropertyToTerraform(struct?: CcScraper.ScrapeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration_blob: cdktn.stringToTerraform(struct!.configurationBlob),
    }
}


export function ccScraperScrapeConfigurationPropertyToHclTerraform(struct?: CcScraper.ScrapeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration_blob: {
            value: cdktn.stringToHclTerraform(struct!.configurationBlob),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperCloudWatchLogDestinationPropertyToTerraform(struct?: CcScraper.CloudWatchLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    }
}


export function ccScraperCloudWatchLogDestinationPropertyToHclTerraform(struct?: CcScraper.CloudWatchLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.logGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperScraperLoggingDestinationPropertyToTerraform(struct?: CcScraper.ScraperLoggingDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccScraperCloudWatchLogDestinationPropertyToTerraform(struct!.cloudwatchLogs),
    }
}


export function ccScraperScraperLoggingDestinationPropertyToHclTerraform(struct?: CcScraper.ScraperLoggingDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccScraperCloudWatchLogDestinationPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogDestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperComponentConfigPropertyToTerraform(struct?: CcScraper.ComponentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
    }
}


export function ccScraperComponentConfigPropertyToHclTerraform(struct?: CcScraper.ComponentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        options: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperScraperComponentPropertyToTerraform(struct?: CcScraper.ScraperComponentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        config: ccScraperComponentConfigPropertyToTerraform(struct!.config),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccScraperScraperComponentPropertyToHclTerraform(struct?: CcScraper.ScraperComponentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        config: {
            value: ccScraperComponentConfigPropertyToHclTerraform(struct!.config),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentConfigProperty",
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


export function ccScraperScraperLoggingConfigurationPropertyToTerraform(struct?: CcScraper.ScraperLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        logging_destination: ccScraperScraperLoggingDestinationPropertyToTerraform(struct!.loggingDestination),
        scraper_components: cdktn.listMapper(ccScraperScraperComponentPropertyToTerraform, false)(struct!.scraperComponents),
    }
}


export function ccScraperScraperLoggingConfigurationPropertyToHclTerraform(struct?: CcScraper.ScraperLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        logging_destination: {
            value: ccScraperScraperLoggingDestinationPropertyToHclTerraform(struct!.loggingDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "ScraperLoggingDestinationProperty",
        },
        scraper_components: {
            value: cdktn.listMapperHcl(ccScraperScraperComponentPropertyToHclTerraform, false)(struct!.scraperComponents),
            isBlock: true,
            type: "list",
            storageClassType: "ScraperComponentPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperEksConfigurationPropertyToTerraform(struct?: CcScraper.EksConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccScraperEksConfigurationPropertyToHclTerraform(struct?: CcScraper.EksConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_arn: {
            value: cdktn.stringToHclTerraform(struct!.clusterArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperVpcConfigurationPropertyToTerraform(struct?: CcScraper.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccScraperVpcConfigurationPropertyToHclTerraform(struct?: CcScraper.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperSourcePropertyToTerraform(struct?: CcScraper.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eks_configuration: ccScraperEksConfigurationPropertyToTerraform(struct!.eksConfiguration),
        vpc_configuration: ccScraperVpcConfigurationPropertyToTerraform(struct!.vpcConfiguration),
    }
}


export function ccScraperSourcePropertyToHclTerraform(struct?: CcScraper.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eks_configuration: {
            value: ccScraperEksConfigurationPropertyToHclTerraform(struct!.eksConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EksConfigurationProperty",
        },
        vpc_configuration: {
            value: ccScraperVpcConfigurationPropertyToHclTerraform(struct!.vpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScraperTagPropertyToTerraform(struct?: CcScraper.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScraperTagPropertyToHclTerraform(struct?: CcScraper.TagProperty | cdktn.IResolvable): any {
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


export namespace CcScraper {
export interface AmpConfigurationProperty {
    /**
    * ARN of an Amazon Managed Prometheus workspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#workspace_arn CcScraper#workspace_arn}
    */
    readonly workspaceArn?: string;
}
export class AmpConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmpConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._workspaceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.workspaceArn = this._workspaceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmpConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._workspaceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._workspaceArn = value.workspaceArn;
        }
    }

    // workspace_arn - computed: true, optional: true, required: false
    private _workspaceArn?: string; 
    public get workspaceArn() {
        return this.getStringAttribute('workspace_arn');
    }
    public set workspaceArn(value: string) {
        this._workspaceArn = value;
    }
    public resetWorkspaceArn() {
        this._workspaceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceArnInput() {
        return this._workspaceArn;
    }
}
export interface CloudWatchConfigurationProperty {
    /**
    * ARN of a CloudWatch dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#dataset_arn CcScraper#dataset_arn}
    */
    readonly datasetArn?: string;
}
export class CloudWatchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._datasetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetArn = this._datasetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._datasetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._datasetArn = value.datasetArn;
        }
    }

    // dataset_arn - computed: true, optional: true, required: false
    private _datasetArn?: string; 
    public get datasetArn() {
        return this.getStringAttribute('dataset_arn');
    }
    public set datasetArn(value: string) {
        this._datasetArn = value;
    }
    public resetDatasetArn() {
        this._datasetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetArnInput() {
        return this._datasetArn;
    }
}
export interface DestinationProperty {
    /**
    * Configuration for Amazon Managed Prometheus metrics destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#amp_configuration CcScraper#amp_configuration}
    */
    readonly ampConfiguration?: AmpConfigurationProperty;
    /**
    * Configuration for CloudWatch metrics destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_configuration CcScraper#cloudwatch_configuration}
    */
    readonly cloudwatchConfiguration?: CloudWatchConfigurationProperty;
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ampConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ampConfiguration = this._ampConfiguration?.internalValue;
        }
        if (this._cloudwatchConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchConfiguration = this._cloudwatchConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ampConfiguration.internalValue = undefined;
            this._cloudwatchConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ampConfiguration.internalValue = value.ampConfiguration;
            this._cloudwatchConfiguration.internalValue = value.cloudwatchConfiguration;
        }
    }

    // amp_configuration - computed: true, optional: true, required: false
    private _ampConfiguration = new AmpConfigurationPropertyOutputReference(this, "amp_configuration");
    public get ampConfiguration() {
        return this._ampConfiguration;
    }
    public putAmpConfiguration(value: AmpConfigurationProperty) {
        this._ampConfiguration.internalValue = value;
    }
    public resetAmpConfiguration() {
        this._ampConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ampConfigurationInput() {
        return this._ampConfiguration.internalValue;
    }

    // cloudwatch_configuration - computed: true, optional: true, required: false
    private _cloudwatchConfiguration = new CloudWatchConfigurationPropertyOutputReference(this, "cloudwatch_configuration");
    public get cloudwatchConfiguration() {
        return this._cloudwatchConfiguration;
    }
    public putCloudwatchConfiguration(value: CloudWatchConfigurationProperty) {
        this._cloudwatchConfiguration.internalValue = value;
    }
    public resetCloudwatchConfiguration() {
        this._cloudwatchConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchConfigurationInput() {
        return this._cloudwatchConfiguration.internalValue;
    }
}
export interface RoleConfigurationProperty {
    /**
    * IAM Role in source account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source_role_arn CcScraper#source_role_arn}
    */
    readonly sourceRoleArn?: string;
    /**
    * IAM Role in the target account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#target_role_arn CcScraper#target_role_arn}
    */
    readonly targetRoleArn?: string;
}
export class RoleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RoleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceRoleArn = this._sourceRoleArn;
        }
        if (this._targetRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetRoleArn = this._targetRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceRoleArn = undefined;
            this._targetRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceRoleArn = value.sourceRoleArn;
            this._targetRoleArn = value.targetRoleArn;
        }
    }

    // source_role_arn - computed: true, optional: true, required: false
    private _sourceRoleArn?: string; 
    public get sourceRoleArn() {
        return this.getStringAttribute('source_role_arn');
    }
    public set sourceRoleArn(value: string) {
        this._sourceRoleArn = value;
    }
    public resetSourceRoleArn() {
        this._sourceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceRoleArnInput() {
        return this._sourceRoleArn;
    }

    // target_role_arn - computed: true, optional: true, required: false
    private _targetRoleArn?: string; 
    public get targetRoleArn() {
        return this.getStringAttribute('target_role_arn');
    }
    public set targetRoleArn(value: string) {
        this._targetRoleArn = value;
    }
    public resetTargetRoleArn() {
        this._targetRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRoleArnInput() {
        return this._targetRoleArn;
    }
}
export interface ScrapeConfigurationProperty {
    /**
    * Prometheus compatible scrape configuration in base64 encoded blob format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#configuration_blob CcScraper#configuration_blob}
    */
    readonly configurationBlob?: string;
}
export class ScrapeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScrapeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configurationBlob !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationBlob = this._configurationBlob;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScrapeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configurationBlob = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configurationBlob = value.configurationBlob;
        }
    }

    // configuration_blob - computed: true, optional: true, required: false
    private _configurationBlob?: string; 
    public get configurationBlob() {
        return this.getStringAttribute('configuration_blob');
    }
    public set configurationBlob(value: string) {
        this._configurationBlob = value;
    }
    public resetConfigurationBlob() {
        this._configurationBlob = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationBlobInput() {
        return this._configurationBlob;
    }
}
export interface CloudWatchLogDestinationProperty {
    /**
    * ARN of the CloudWatch log group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#log_group_arn CcScraper#log_group_arn}
    */
    readonly logGroupArn?: string;
}
export class CloudWatchLogDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupArn = this._logGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLogDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupArn = value.logGroupArn;
        }
    }

    // log_group_arn - computed: true, optional: true, required: false
    private _logGroupArn?: string; 
    public get logGroupArn() {
        return this.getStringAttribute('log_group_arn');
    }
    public set logGroupArn(value: string) {
        this._logGroupArn = value;
    }
    public resetLogGroupArn() {
        this._logGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupArnInput() {
        return this._logGroupArn;
    }
}
export interface ScraperLoggingDestinationProperty {
    /**
    * Represents a cloudwatch logs destination for scraper logging
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_logs CcScraper#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudWatchLogDestinationProperty;
}
export class ScraperLoggingDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScraperLoggingDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScraperLoggingDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
        }
    }

    // cloudwatch_logs - computed: true, optional: true, required: false
    private _cloudwatchLogs = new CloudWatchLogDestinationPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: CloudWatchLogDestinationProperty) {
        this._cloudwatchLogs.internalValue = value;
    }
    public resetCloudwatchLogs() {
        this._cloudwatchLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
        return this._cloudwatchLogs.internalValue;
    }
}
export interface ComponentConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#options CcScraper#options}
    */
    readonly options?: { [key: string]: string };
}
export class ComponentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._options !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._options = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._options = value.options;
        }
    }

    // options - computed: true, optional: true, required: false
    private _options?: { [key: string]: string }; 
    public get options() {
        return this.getStringMapAttribute('options');
    }
    public set options(value: { [key: string]: string }) {
        this._options = value;
    }
    public resetOptions() {
        this._options = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options;
    }
}
export interface ScraperComponentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#config CcScraper#config}
    */
    readonly config?: ComponentConfigProperty;
    /**
    * Type of scraper component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#type CcScraper#type}
    */
    readonly type?: string;
}
export class ScraperComponentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ScraperComponentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._config?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.config = this._config?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScraperComponentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._config.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._config.internalValue = value.config;
            this._type = value.type;
        }
    }

    // config - computed: true, optional: true, required: false
    private _config = new ComponentConfigPropertyOutputReference(this, "config");
    public get config() {
        return this._config;
    }
    public putConfig(value: ComponentConfigProperty) {
        this._config.internalValue = value;
    }
    public resetConfig() {
        this._config.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configInput() {
        return this._config.internalValue;
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

export class ScraperComponentPropertyList extends cdktn.ComplexList {
    public internalValue? : ScraperComponentProperty[] | cdktn.IResolvable

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
    public get(index: number): ScraperComponentPropertyOutputReference {
        return new ScraperComponentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScraperLoggingConfigurationProperty {
    /**
    * Destination for scraper logging
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#logging_destination CcScraper#logging_destination}
    */
    readonly loggingDestination?: ScraperLoggingDestinationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_components CcScraper#scraper_components}
    */
    readonly scraperComponents?: ScraperComponentProperty[] | cdktn.IResolvable;
}
export class ScraperLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScraperLoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._loggingDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingDestination = this._loggingDestination?.internalValue;
        }
        if (this._scraperComponents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scraperComponents = this._scraperComponents?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScraperLoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._loggingDestination.internalValue = undefined;
            this._scraperComponents.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._loggingDestination.internalValue = value.loggingDestination;
            this._scraperComponents.internalValue = value.scraperComponents;
        }
    }

    // logging_destination - computed: true, optional: true, required: false
    private _loggingDestination = new ScraperLoggingDestinationPropertyOutputReference(this, "logging_destination");
    public get loggingDestination() {
        return this._loggingDestination;
    }
    public putLoggingDestination(value: ScraperLoggingDestinationProperty) {
        this._loggingDestination.internalValue = value;
    }
    public resetLoggingDestination() {
        this._loggingDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingDestinationInput() {
        return this._loggingDestination.internalValue;
    }

    // scraper_components - computed: true, optional: true, required: false
    private _scraperComponents = new ScraperComponentPropertyList(this, "scraper_components", false);
    public get scraperComponents() {
        return this._scraperComponents;
    }
    public putScraperComponents(value: ScraperComponentProperty[] | cdktn.IResolvable) {
        this._scraperComponents.internalValue = value;
    }
    public resetScraperComponents() {
        this._scraperComponents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scraperComponentsInput() {
        return this._scraperComponents.internalValue;
    }
}
export interface EksConfigurationProperty {
    /**
    * ARN of an EKS cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cluster_arn CcScraper#cluster_arn}
    */
    readonly clusterArn?: string;
    /**
    * List of security group IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids CcScraper#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * List of subnet IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids CcScraper#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class EksConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EksConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterArn = this._clusterArn;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EksConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterArn = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterArn = value.clusterArn;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // cluster_arn - computed: true, optional: true, required: false
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    public resetClusterArn() {
        this._clusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface VpcConfigurationProperty {
    /**
    * List of security group IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids CcScraper#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * List of subnet IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids CcScraper#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class VpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface SourceProperty {
    /**
    * Configuration for EKS metrics source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#eks_configuration CcScraper#eks_configuration}
    */
    readonly eksConfiguration?: EksConfigurationProperty;
    /**
    * Configuration for VPC metrics source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#vpc_configuration CcScraper#vpc_configuration}
    */
    readonly vpcConfiguration?: VpcConfigurationProperty;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eksConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eksConfiguration = this._eksConfiguration?.internalValue;
        }
        if (this._vpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eksConfiguration.internalValue = undefined;
            this._vpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eksConfiguration.internalValue = value.eksConfiguration;
            this._vpcConfiguration.internalValue = value.vpcConfiguration;
        }
    }

    // eks_configuration - computed: true, optional: true, required: false
    private _eksConfiguration = new EksConfigurationPropertyOutputReference(this, "eks_configuration");
    public get eksConfiguration() {
        return this._eksConfiguration;
    }
    public putEksConfiguration(value: EksConfigurationProperty) {
        this._eksConfiguration.internalValue = value;
    }
    public resetEksConfiguration() {
        this._eksConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eksConfigurationInput() {
        return this._eksConfiguration.internalValue;
    }

    // vpc_configuration - computed: true, optional: true, required: false
    private _vpcConfiguration = new VpcConfigurationPropertyOutputReference(this, "vpc_configuration");
    public get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    public putVpcConfiguration(value: VpcConfigurationProperty) {
        this._vpcConfiguration.internalValue = value;
    }
    public resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#key CcScraper#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#value CcScraper#value}
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
