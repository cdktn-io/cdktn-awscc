// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCrawlerProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#classifiers CcCrawler#classifiers}
    */
    readonly classifiers?: string[];
    /**
    * Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#configuration CcCrawler#configuration}
    */
    readonly configuration?: string;
    /**
    * The name of the SecurityConfiguration structure to be used by this crawler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#crawler_security_configuration CcCrawler#crawler_security_configuration}
    */
    readonly crawlerSecurityConfiguration?: string;
    /**
    * The name of the database in which the crawler's output is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#database_name CcCrawler#database_name}
    */
    readonly databaseName?: string;
    /**
    * A description of the crawler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#description CcCrawler#description}
    */
    readonly description?: string;
    /**
    * Specifies AWS Lake Formation configuration settings for the crawler
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#lake_formation_configuration CcCrawler#lake_formation_configuration}
    */
    readonly lakeFormationConfiguration?: CcCrawler.LakeFormationConfigurationProperty;
    /**
    * The name of the crawler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#name CcCrawler#name}
    */
    readonly name?: string;
    /**
    * When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see Incremental Crawls in AWS Glue in the developer guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#recrawl_policy CcCrawler#recrawl_policy}
    */
    readonly recrawlPolicy?: CcCrawler.RecrawlPolicyProperty;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#role CcCrawler#role}
    */
    readonly role: string;
    /**
    * A scheduling object using a cron statement to schedule an event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#schedule CcCrawler#schedule}
    */
    readonly schedule?: CcCrawler.ScheduleProperty;
    /**
    * The policy that specifies update and delete behaviors for the crawler. The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#schema_change_policy CcCrawler#schema_change_policy}
    */
    readonly schemaChangePolicy?: CcCrawler.SchemaChangePolicyProperty;
    /**
    * The prefix added to the names of tables that are created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#table_prefix CcCrawler#table_prefix}
    */
    readonly tablePrefix?: string;
    /**
    * The tags to use with this crawler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#tags CcCrawler#tags}
    */
    readonly tags?: string;
    /**
    * Specifies data stores to crawl.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#targets CcCrawler#targets}
    */
    readonly targets: CcCrawler.TargetsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler awscc_glue_crawler}
*/
export class CcCrawler extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_crawler";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCrawler resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCrawler to import
    * @param importFromId The id of the existing CcCrawler that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCrawler to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_crawler", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler awscc_glue_crawler} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCrawlerProps
    */
    public constructor(scope: Construct, id: string, config: CcCrawlerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_crawler',
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
        this._classifiers = config.classifiers;
        this._configuration = config.configuration;
        this._crawlerSecurityConfiguration = config.crawlerSecurityConfiguration;
        this._databaseName = config.databaseName;
        this._description = config.description;
        this._lakeFormationConfiguration.internalValue = config.lakeFormationConfiguration;
        this._name = config.name;
        this._recrawlPolicy.internalValue = config.recrawlPolicy;
        this._role = config.role;
        this._schedule.internalValue = config.schedule;
        this._schemaChangePolicy.internalValue = config.schemaChangePolicy;
        this._tablePrefix = config.tablePrefix;
        this._tags = config.tags;
        this._targets.internalValue = config.targets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // classifiers - computed: true, optional: true, required: false
    private _classifiers?: string[]; 
    public get classifiers() {
        return this.getListAttribute('classifiers');
    }
    public set classifiers(value: string[]) {
        this._classifiers = value;
    }
    public resetClassifiers() {
        this._classifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classifiersInput() {
        return this._classifiers;
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    public resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
    }

    // crawler_security_configuration - computed: true, optional: true, required: false
    private _crawlerSecurityConfiguration?: string; 
    public get crawlerSecurityConfiguration() {
        return this.getStringAttribute('crawler_security_configuration');
    }
    public set crawlerSecurityConfiguration(value: string) {
        this._crawlerSecurityConfiguration = value;
    }
    public resetCrawlerSecurityConfiguration() {
        this._crawlerSecurityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlerSecurityConfigurationInput() {
        return this._crawlerSecurityConfiguration;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
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

    // lake_formation_configuration - computed: true, optional: true, required: false
    private _lakeFormationConfiguration = new CcCrawler.LakeFormationConfigurationPropertyOutputReference(this, "lake_formation_configuration");
    public get lakeFormationConfiguration() {
        return this._lakeFormationConfiguration;
    }
    public putLakeFormationConfiguration(value: CcCrawler.LakeFormationConfigurationProperty) {
        this._lakeFormationConfiguration.internalValue = value;
    }
    public resetLakeFormationConfiguration() {
        this._lakeFormationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lakeFormationConfigurationInput() {
        return this._lakeFormationConfiguration.internalValue;
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

    // recrawl_policy - computed: true, optional: true, required: false
    private _recrawlPolicy = new CcCrawler.RecrawlPolicyPropertyOutputReference(this, "recrawl_policy");
    public get recrawlPolicy() {
        return this._recrawlPolicy;
    }
    public putRecrawlPolicy(value: CcCrawler.RecrawlPolicyProperty) {
        this._recrawlPolicy.internalValue = value;
    }
    public resetRecrawlPolicy() {
        this._recrawlPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recrawlPolicyInput() {
        return this._recrawlPolicy.internalValue;
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule = new CcCrawler.SchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: CcCrawler.ScheduleProperty) {
        this._schedule.internalValue = value;
    }
    public resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }

    // schema_change_policy - computed: true, optional: true, required: false
    private _schemaChangePolicy = new CcCrawler.SchemaChangePolicyPropertyOutputReference(this, "schema_change_policy");
    public get schemaChangePolicy() {
        return this._schemaChangePolicy;
    }
    public putSchemaChangePolicy(value: CcCrawler.SchemaChangePolicyProperty) {
        this._schemaChangePolicy.internalValue = value;
    }
    public resetSchemaChangePolicy() {
        this._schemaChangePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaChangePolicyInput() {
        return this._schemaChangePolicy.internalValue;
    }

    // table_prefix - computed: true, optional: true, required: false
    private _tablePrefix?: string; 
    public get tablePrefix() {
        return this.getStringAttribute('table_prefix');
    }
    public set tablePrefix(value: string) {
        this._tablePrefix = value;
    }
    public resetTablePrefix() {
        this._tablePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tablePrefixInput() {
        return this._tablePrefix;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: string; 
    public get tags() {
        return this.getStringAttribute('tags');
    }
    public set tags(value: string) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // targets - computed: false, optional: false, required: true
    private _targets = new CcCrawler.TargetsPropertyOutputReference(this, "targets");
    public get targets() {
        return this._targets;
    }
    public putTargets(value: CcCrawler.TargetsProperty) {
        this._targets.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            classifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._classifiers),
            configuration: cdktn.stringToTerraform(this._configuration),
            crawler_security_configuration: cdktn.stringToTerraform(this._crawlerSecurityConfiguration),
            database_name: cdktn.stringToTerraform(this._databaseName),
            description: cdktn.stringToTerraform(this._description),
            lake_formation_configuration: ccCrawlerLakeFormationConfigurationPropertyToTerraform(this._lakeFormationConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            recrawl_policy: ccCrawlerRecrawlPolicyPropertyToTerraform(this._recrawlPolicy.internalValue),
            role: cdktn.stringToTerraform(this._role),
            schedule: ccCrawlerSchedulePropertyToTerraform(this._schedule.internalValue),
            schema_change_policy: ccCrawlerSchemaChangePolicyPropertyToTerraform(this._schemaChangePolicy.internalValue),
            table_prefix: cdktn.stringToTerraform(this._tablePrefix),
            tags: cdktn.stringToTerraform(this._tags),
            targets: ccCrawlerTargetsPropertyToTerraform(this._targets.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            classifiers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._classifiers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            configuration: {
                value: cdktn.stringToHclTerraform(this._configuration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            crawler_security_configuration: {
                value: cdktn.stringToHclTerraform(this._crawlerSecurityConfiguration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_name: {
                value: cdktn.stringToHclTerraform(this._databaseName),
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
            lake_formation_configuration: {
                value: ccCrawlerLakeFormationConfigurationPropertyToHclTerraform(this._lakeFormationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCrawler.LakeFormationConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recrawl_policy: {
                value: ccCrawlerRecrawlPolicyPropertyToHclTerraform(this._recrawlPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCrawler.RecrawlPolicyProperty",
            },
            role: {
                value: cdktn.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule: {
                value: ccCrawlerSchedulePropertyToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCrawler.ScheduleProperty",
            },
            schema_change_policy: {
                value: ccCrawlerSchemaChangePolicyPropertyToHclTerraform(this._schemaChangePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCrawler.SchemaChangePolicyProperty",
            },
            table_prefix: {
                value: cdktn.stringToHclTerraform(this._tablePrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.stringToHclTerraform(this._tags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            targets: {
                value: ccCrawlerTargetsPropertyToHclTerraform(this._targets.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCrawler.TargetsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCrawlerLakeFormationConfigurationPropertyToTerraform(struct?: CcCrawler.LakeFormationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        use_lake_formation_credentials: cdktn.booleanToTerraform(struct!.useLakeFormationCredentials),
    }
}


export function ccCrawlerLakeFormationConfigurationPropertyToHclTerraform(struct?: CcCrawler.LakeFormationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_lake_formation_credentials: {
            value: cdktn.booleanToHclTerraform(struct!.useLakeFormationCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerRecrawlPolicyPropertyToTerraform(struct?: CcCrawler.RecrawlPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        recrawl_behavior: cdktn.stringToTerraform(struct!.recrawlBehavior),
    }
}


export function ccCrawlerRecrawlPolicyPropertyToHclTerraform(struct?: CcCrawler.RecrawlPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        recrawl_behavior: {
            value: cdktn.stringToHclTerraform(struct!.recrawlBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerSchedulePropertyToTerraform(struct?: CcCrawler.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    }
}


export function ccCrawlerSchedulePropertyToHclTerraform(struct?: CcCrawler.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerSchemaChangePolicyPropertyToTerraform(struct?: CcCrawler.SchemaChangePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delete_behavior: cdktn.stringToTerraform(struct!.deleteBehavior),
        update_behavior: cdktn.stringToTerraform(struct!.updateBehavior),
    }
}


export function ccCrawlerSchemaChangePolicyPropertyToHclTerraform(struct?: CcCrawler.SchemaChangePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delete_behavior: {
            value: cdktn.stringToHclTerraform(struct!.deleteBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_behavior: {
            value: cdktn.stringToHclTerraform(struct!.updateBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerCatalogTargetPropertyToTerraform(struct?: CcCrawler.CatalogTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        dlq_event_queue_arn: cdktn.stringToTerraform(struct!.dlqEventQueueArn),
        event_queue_arn: cdktn.stringToTerraform(struct!.eventQueueArn),
        tables: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tables),
    }
}


export function ccCrawlerCatalogTargetPropertyToHclTerraform(struct?: CcCrawler.CatalogTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dlq_event_queue_arn: {
            value: cdktn.stringToHclTerraform(struct!.dlqEventQueueArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_queue_arn: {
            value: cdktn.stringToHclTerraform(struct!.eventQueueArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tables: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tables),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerDeltaTargetPropertyToTerraform(struct?: CcCrawler.DeltaTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        create_native_delta_table: cdktn.booleanToTerraform(struct!.createNativeDeltaTable),
        delta_tables: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.deltaTables),
        write_manifest: cdktn.booleanToTerraform(struct!.writeManifest),
    }
}


export function ccCrawlerDeltaTargetPropertyToHclTerraform(struct?: CcCrawler.DeltaTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_native_delta_table: {
            value: cdktn.booleanToHclTerraform(struct!.createNativeDeltaTable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        delta_tables: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.deltaTables),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        write_manifest: {
            value: cdktn.booleanToHclTerraform(struct!.writeManifest),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerDynamoDBTargetPropertyToTerraform(struct?: CcCrawler.DynamoDBTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        path: cdktn.stringToTerraform(struct!.path),
        scan_all: cdktn.booleanToTerraform(struct!.scanAll),
        scan_rate: cdktn.numberToTerraform(struct!.scanRate),
    }
}


export function ccCrawlerDynamoDBTargetPropertyToHclTerraform(struct?: CcCrawler.DynamoDBTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scan_all: {
            value: cdktn.booleanToHclTerraform(struct!.scanAll),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scan_rate: {
            value: cdktn.numberToHclTerraform(struct!.scanRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerHudiTargetPropertyToTerraform(struct?: CcCrawler.HudiTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
        maximum_traversal_depth: cdktn.numberToTerraform(struct!.maximumTraversalDepth),
        paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    }
}


export function ccCrawlerHudiTargetPropertyToHclTerraform(struct?: CcCrawler.HudiTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exclusions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        maximum_traversal_depth: {
            value: cdktn.numberToHclTerraform(struct!.maximumTraversalDepth),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        paths: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerIcebergTargetPropertyToTerraform(struct?: CcCrawler.IcebergTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
        maximum_traversal_depth: cdktn.numberToTerraform(struct!.maximumTraversalDepth),
        paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    }
}


export function ccCrawlerIcebergTargetPropertyToHclTerraform(struct?: CcCrawler.IcebergTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exclusions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        maximum_traversal_depth: {
            value: cdktn.numberToHclTerraform(struct!.maximumTraversalDepth),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        paths: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerJdbcTargetPropertyToTerraform(struct?: CcCrawler.JdbcTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        enable_additional_metadata: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enableAdditionalMetadata),
        exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccCrawlerJdbcTargetPropertyToHclTerraform(struct?: CcCrawler.JdbcTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_additional_metadata: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enableAdditionalMetadata),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        exclusions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerMongoDBTargetPropertyToTerraform(struct?: CcCrawler.MongoDBTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccCrawlerMongoDBTargetPropertyToHclTerraform(struct?: CcCrawler.MongoDBTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerS3TargetPropertyToTerraform(struct?: CcCrawler.S3TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        dlq_event_queue_arn: cdktn.stringToTerraform(struct!.dlqEventQueueArn),
        event_queue_arn: cdktn.stringToTerraform(struct!.eventQueueArn),
        exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
        path: cdktn.stringToTerraform(struct!.path),
        sample_size: cdktn.numberToTerraform(struct!.sampleSize),
    }
}


export function ccCrawlerS3TargetPropertyToHclTerraform(struct?: CcCrawler.S3TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dlq_event_queue_arn: {
            value: cdktn.stringToHclTerraform(struct!.dlqEventQueueArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_queue_arn: {
            value: cdktn.stringToHclTerraform(struct!.eventQueueArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exclusions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sample_size: {
            value: cdktn.numberToHclTerraform(struct!.sampleSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrawlerTargetsPropertyToTerraform(struct?: CcCrawler.TargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_targets: cdktn.listMapper(ccCrawlerCatalogTargetPropertyToTerraform, false)(struct!.catalogTargets),
        delta_targets: cdktn.listMapper(ccCrawlerDeltaTargetPropertyToTerraform, false)(struct!.deltaTargets),
        dynamo_db_targets: cdktn.listMapper(ccCrawlerDynamoDBTargetPropertyToTerraform, false)(struct!.dynamoDbTargets),
        hudi_targets: cdktn.listMapper(ccCrawlerHudiTargetPropertyToTerraform, false)(struct!.hudiTargets),
        iceberg_targets: cdktn.listMapper(ccCrawlerIcebergTargetPropertyToTerraform, false)(struct!.icebergTargets),
        jdbc_targets: cdktn.listMapper(ccCrawlerJdbcTargetPropertyToTerraform, false)(struct!.jdbcTargets),
        mongo_db_targets: cdktn.listMapper(ccCrawlerMongoDBTargetPropertyToTerraform, false)(struct!.mongoDbTargets),
        s3_targets: cdktn.listMapper(ccCrawlerS3TargetPropertyToTerraform, false)(struct!.s3Targets),
    }
}


export function ccCrawlerTargetsPropertyToHclTerraform(struct?: CcCrawler.TargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_targets: {
            value: cdktn.listMapperHcl(ccCrawlerCatalogTargetPropertyToHclTerraform, false)(struct!.catalogTargets),
            isBlock: true,
            type: "list",
            storageClassType: "CatalogTargetPropertyList",
        },
        delta_targets: {
            value: cdktn.listMapperHcl(ccCrawlerDeltaTargetPropertyToHclTerraform, false)(struct!.deltaTargets),
            isBlock: true,
            type: "list",
            storageClassType: "DeltaTargetPropertyList",
        },
        dynamo_db_targets: {
            value: cdktn.listMapperHcl(ccCrawlerDynamoDBTargetPropertyToHclTerraform, false)(struct!.dynamoDbTargets),
            isBlock: true,
            type: "list",
            storageClassType: "DynamoDBTargetPropertyList",
        },
        hudi_targets: {
            value: cdktn.listMapperHcl(ccCrawlerHudiTargetPropertyToHclTerraform, false)(struct!.hudiTargets),
            isBlock: true,
            type: "list",
            storageClassType: "HudiTargetPropertyList",
        },
        iceberg_targets: {
            value: cdktn.listMapperHcl(ccCrawlerIcebergTargetPropertyToHclTerraform, false)(struct!.icebergTargets),
            isBlock: true,
            type: "list",
            storageClassType: "IcebergTargetPropertyList",
        },
        jdbc_targets: {
            value: cdktn.listMapperHcl(ccCrawlerJdbcTargetPropertyToHclTerraform, false)(struct!.jdbcTargets),
            isBlock: true,
            type: "list",
            storageClassType: "JdbcTargetPropertyList",
        },
        mongo_db_targets: {
            value: cdktn.listMapperHcl(ccCrawlerMongoDBTargetPropertyToHclTerraform, false)(struct!.mongoDbTargets),
            isBlock: true,
            type: "list",
            storageClassType: "MongoDBTargetPropertyList",
        },
        s3_targets: {
            value: cdktn.listMapperHcl(ccCrawlerS3TargetPropertyToHclTerraform, false)(struct!.s3Targets),
            isBlock: true,
            type: "list",
            storageClassType: "S3TargetPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCrawler {
export interface LakeFormationConfigurationProperty {
    /**
    * Required for cross account crawls. For same account crawls as the target data, this can be left as null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#account_id CcCrawler#account_id}
    */
    readonly accountId?: string;
    /**
    * Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#use_lake_formation_credentials CcCrawler#use_lake_formation_credentials}
    */
    readonly useLakeFormationCredentials?: boolean | cdktn.IResolvable;
}
export class LakeFormationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LakeFormationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._useLakeFormationCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLakeFormationCredentials = this._useLakeFormationCredentials;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LakeFormationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._useLakeFormationCredentials = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._useLakeFormationCredentials = value.useLakeFormationCredentials;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // use_lake_formation_credentials - computed: true, optional: true, required: false
    private _useLakeFormationCredentials?: boolean | cdktn.IResolvable; 
    public get useLakeFormationCredentials() {
        return this.getBooleanAttribute('use_lake_formation_credentials');
    }
    public set useLakeFormationCredentials(value: boolean | cdktn.IResolvable) {
        this._useLakeFormationCredentials = value;
    }
    public resetUseLakeFormationCredentials() {
        this._useLakeFormationCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLakeFormationCredentialsInput() {
        return this._useLakeFormationCredentials;
    }
}
export interface RecrawlPolicyProperty {
    /**
    * Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. A value of CRAWL_EVERYTHING specifies crawling the entire dataset again. A value of CRAWL_NEW_FOLDERS_ONLY specifies crawling only folders that were added since the last crawler run. A value of CRAWL_EVENT_MODE specifies crawling only the changes identified by Amazon S3 events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#recrawl_behavior CcCrawler#recrawl_behavior}
    */
    readonly recrawlBehavior?: string;
}
export class RecrawlPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecrawlPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._recrawlBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.recrawlBehavior = this._recrawlBehavior;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecrawlPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._recrawlBehavior = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._recrawlBehavior = value.recrawlBehavior;
        }
    }

    // recrawl_behavior - computed: true, optional: true, required: false
    private _recrawlBehavior?: string; 
    public get recrawlBehavior() {
        return this.getStringAttribute('recrawl_behavior');
    }
    public set recrawlBehavior(value: string) {
        this._recrawlBehavior = value;
    }
    public resetRecrawlBehavior() {
        this._recrawlBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recrawlBehaviorInput() {
        return this._recrawlBehavior;
    }
}
export interface ScheduleProperty {
    /**
    * A cron expression used to specify the schedule. For more information, see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, specify cron(15 12 * * ? *).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#schedule_expression CcCrawler#schedule_expression}
    */
    readonly scheduleExpression?: string;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scheduleExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scheduleExpression = value.scheduleExpression;
        }
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }
}
export interface SchemaChangePolicyProperty {
    /**
    * The deletion behavior when the crawler finds a deleted object. A value of LOG specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist. A value of DELETE_FROM_DATABASE specifies that if a table or partition is found to have been removed, delete it from the database. A value of DEPRECATE_IN_DATABASE specifies that if a table has been found to no longer exist, to add a property to the table that says 'DEPRECATED' and includes a timestamp with the time of deprecation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#delete_behavior CcCrawler#delete_behavior}
    */
    readonly deleteBehavior?: string;
    /**
    * The update behavior when the crawler finds a changed schema. A value of LOG specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables). A value of UPDATE_IN_DATABASE specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#update_behavior CcCrawler#update_behavior}
    */
    readonly updateBehavior?: string;
}
export class SchemaChangePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchemaChangePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deleteBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteBehavior = this._deleteBehavior;
        }
        if (this._updateBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateBehavior = this._updateBehavior;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaChangePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteBehavior = undefined;
            this._updateBehavior = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deleteBehavior = value.deleteBehavior;
            this._updateBehavior = value.updateBehavior;
        }
    }

    // delete_behavior - computed: true, optional: true, required: false
    private _deleteBehavior?: string; 
    public get deleteBehavior() {
        return this.getStringAttribute('delete_behavior');
    }
    public set deleteBehavior(value: string) {
        this._deleteBehavior = value;
    }
    public resetDeleteBehavior() {
        this._deleteBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteBehaviorInput() {
        return this._deleteBehavior;
    }

    // update_behavior - computed: true, optional: true, required: false
    private _updateBehavior?: string; 
    public get updateBehavior() {
        return this.getStringAttribute('update_behavior');
    }
    public set updateBehavior(value: string) {
        this._updateBehavior = value;
    }
    public resetUpdateBehavior() {
        this._updateBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateBehaviorInput() {
        return this._updateBehavior;
    }
}
export interface CatalogTargetProperty {
    /**
    * The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name CcCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * The name of the database to be synchronized.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#database_name CcCrawler#database_name}
    */
    readonly databaseName?: string;
    /**
    * A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#dlq_event_queue_arn CcCrawler#dlq_event_queue_arn}
    */
    readonly dlqEventQueueArn?: string;
    /**
    * A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#event_queue_arn CcCrawler#event_queue_arn}
    */
    readonly eventQueueArn?: string;
    /**
    * A list of the tables to be synchronized.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#tables CcCrawler#tables}
    */
    readonly tables?: string[];
}
export class CatalogTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CatalogTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._dlqEventQueueArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dlqEventQueueArn = this._dlqEventQueueArn;
        }
        if (this._eventQueueArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventQueueArn = this._eventQueueArn;
        }
        if (this._tables !== undefined) {
            hasAnyValues = true;
            internalValueResult.tables = this._tables;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CatalogTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionName = undefined;
            this._databaseName = undefined;
            this._dlqEventQueueArn = undefined;
            this._eventQueueArn = undefined;
            this._tables = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionName = value.connectionName;
            this._databaseName = value.databaseName;
            this._dlqEventQueueArn = value.dlqEventQueueArn;
            this._eventQueueArn = value.eventQueueArn;
            this._tables = value.tables;
        }
    }

    // connection_name - computed: true, optional: true, required: false
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    public resetConnectionName() {
        this._connectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // dlq_event_queue_arn - computed: true, optional: true, required: false
    private _dlqEventQueueArn?: string; 
    public get dlqEventQueueArn() {
        return this.getStringAttribute('dlq_event_queue_arn');
    }
    public set dlqEventQueueArn(value: string) {
        this._dlqEventQueueArn = value;
    }
    public resetDlqEventQueueArn() {
        this._dlqEventQueueArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dlqEventQueueArnInput() {
        return this._dlqEventQueueArn;
    }

    // event_queue_arn - computed: true, optional: true, required: false
    private _eventQueueArn?: string; 
    public get eventQueueArn() {
        return this.getStringAttribute('event_queue_arn');
    }
    public set eventQueueArn(value: string) {
        this._eventQueueArn = value;
    }
    public resetEventQueueArn() {
        this._eventQueueArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventQueueArnInput() {
        return this._eventQueueArn;
    }

    // tables - computed: true, optional: true, required: false
    private _tables?: string[]; 
    public get tables() {
        return this.getListAttribute('tables');
    }
    public set tables(value: string[]) {
        this._tables = value;
    }
    public resetTables() {
        this._tables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tablesInput() {
        return this._tables;
    }
}

export class CatalogTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : CatalogTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): CatalogTargetPropertyOutputReference {
        return new CatalogTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DeltaTargetProperty {
    /**
    * The name of the connection to use to connect to the Delta table target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name CcCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#create_native_delta_table CcCrawler#create_native_delta_table}
    */
    readonly createNativeDeltaTable?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#delta_tables CcCrawler#delta_tables}
    */
    readonly deltaTables?: string[];
    /**
    * Specifies whether to write the manifest files to the Delta table path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#write_manifest CcCrawler#write_manifest}
    */
    readonly writeManifest?: boolean | cdktn.IResolvable;
}
export class DeltaTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DeltaTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._createNativeDeltaTable !== undefined) {
            hasAnyValues = true;
            internalValueResult.createNativeDeltaTable = this._createNativeDeltaTable;
        }
        if (this._deltaTables !== undefined) {
            hasAnyValues = true;
            internalValueResult.deltaTables = this._deltaTables;
        }
        if (this._writeManifest !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeManifest = this._writeManifest;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeltaTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionName = undefined;
            this._createNativeDeltaTable = undefined;
            this._deltaTables = undefined;
            this._writeManifest = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionName = value.connectionName;
            this._createNativeDeltaTable = value.createNativeDeltaTable;
            this._deltaTables = value.deltaTables;
            this._writeManifest = value.writeManifest;
        }
    }

    // connection_name - computed: true, optional: true, required: false
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    public resetConnectionName() {
        this._connectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // create_native_delta_table - computed: true, optional: true, required: false
    private _createNativeDeltaTable?: boolean | cdktn.IResolvable; 
    public get createNativeDeltaTable() {
        return this.getBooleanAttribute('create_native_delta_table');
    }
    public set createNativeDeltaTable(value: boolean | cdktn.IResolvable) {
        this._createNativeDeltaTable = value;
    }
    public resetCreateNativeDeltaTable() {
        this._createNativeDeltaTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createNativeDeltaTableInput() {
        return this._createNativeDeltaTable;
    }

    // delta_tables - computed: true, optional: true, required: false
    private _deltaTables?: string[]; 
    public get deltaTables() {
        return this.getListAttribute('delta_tables');
    }
    public set deltaTables(value: string[]) {
        this._deltaTables = value;
    }
    public resetDeltaTables() {
        this._deltaTables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deltaTablesInput() {
        return this._deltaTables;
    }

    // write_manifest - computed: true, optional: true, required: false
    private _writeManifest?: boolean | cdktn.IResolvable; 
    public get writeManifest() {
        return this.getBooleanAttribute('write_manifest');
    }
    public set writeManifest(value: boolean | cdktn.IResolvable) {
        this._writeManifest = value;
    }
    public resetWriteManifest() {
        this._writeManifest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeManifestInput() {
        return this._writeManifest;
    }
}

export class DeltaTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : DeltaTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): DeltaTargetPropertyOutputReference {
        return new DeltaTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DynamoDBTargetProperty {
    /**
    * The name of the DynamoDB table to crawl.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#path CcCrawler#path}
    */
    readonly path?: string;
    /**
    * Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table. A value of true means to scan all records, while a value of false means to sample the records. If no value is specified, the value defaults to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#scan_all CcCrawler#scan_all}
    */
    readonly scanAll?: boolean | cdktn.IResolvable;
    /**
    * The percentage of the configured read capacity units to use by the AWS Glue crawler. Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.
    * 
    * The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#scan_rate CcCrawler#scan_rate}
    */
    readonly scanRate?: number;
}
export class DynamoDBTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DynamoDBTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._scanAll !== undefined) {
            hasAnyValues = true;
            internalValueResult.scanAll = this._scanAll;
        }
        if (this._scanRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.scanRate = this._scanRate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDBTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path = undefined;
            this._scanAll = undefined;
            this._scanRate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path = value.path;
            this._scanAll = value.scanAll;
            this._scanRate = value.scanRate;
        }
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // scan_all - computed: true, optional: true, required: false
    private _scanAll?: boolean | cdktn.IResolvable; 
    public get scanAll() {
        return this.getBooleanAttribute('scan_all');
    }
    public set scanAll(value: boolean | cdktn.IResolvable) {
        this._scanAll = value;
    }
    public resetScanAll() {
        this._scanAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scanAllInput() {
        return this._scanAll;
    }

    // scan_rate - computed: true, optional: true, required: false
    private _scanRate?: number; 
    public get scanRate() {
        return this.getNumberAttribute('scan_rate');
    }
    public set scanRate(value: number) {
        this._scanRate = value;
    }
    public resetScanRate() {
        this._scanRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scanRateInput() {
        return this._scanRate;
    }
}

export class DynamoDBTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : DynamoDBTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): DynamoDBTargetPropertyOutputReference {
        return new DynamoDBTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HudiTargetProperty {
    /**
    * The name of the connection to use to connect to the Hudi target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name CcCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * A list of global patterns used to exclude from the crawl.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#exclusions CcCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. Used to limit the crawler run time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#maximum_traversal_depth CcCrawler#maximum_traversal_depth}
    */
    readonly maximumTraversalDepth?: number;
    /**
    * One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix .
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#paths CcCrawler#paths}
    */
    readonly paths?: string[];
}
export class HudiTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HudiTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._exclusions !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusions = this._exclusions;
        }
        if (this._maximumTraversalDepth !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumTraversalDepth = this._maximumTraversalDepth;
        }
        if (this._paths !== undefined) {
            hasAnyValues = true;
            internalValueResult.paths = this._paths;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HudiTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionName = undefined;
            this._exclusions = undefined;
            this._maximumTraversalDepth = undefined;
            this._paths = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionName = value.connectionName;
            this._exclusions = value.exclusions;
            this._maximumTraversalDepth = value.maximumTraversalDepth;
            this._paths = value.paths;
        }
    }

    // connection_name - computed: true, optional: true, required: false
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    public resetConnectionName() {
        this._connectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // exclusions - computed: true, optional: true, required: false
    private _exclusions?: string[]; 
    public get exclusions() {
        return this.getListAttribute('exclusions');
    }
    public set exclusions(value: string[]) {
        this._exclusions = value;
    }
    public resetExclusions() {
        this._exclusions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionsInput() {
        return this._exclusions;
    }

    // maximum_traversal_depth - computed: true, optional: true, required: false
    private _maximumTraversalDepth?: number; 
    public get maximumTraversalDepth() {
        return this.getNumberAttribute('maximum_traversal_depth');
    }
    public set maximumTraversalDepth(value: number) {
        this._maximumTraversalDepth = value;
    }
    public resetMaximumTraversalDepth() {
        this._maximumTraversalDepth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumTraversalDepthInput() {
        return this._maximumTraversalDepth;
    }

    // paths - computed: true, optional: true, required: false
    private _paths?: string[]; 
    public get paths() {
        return this.getListAttribute('paths');
    }
    public set paths(value: string[]) {
        this._paths = value;
    }
    public resetPaths() {
        this._paths = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathsInput() {
        return this._paths;
    }
}

export class HudiTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : HudiTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): HudiTargetPropertyOutputReference {
        return new HudiTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IcebergTargetProperty {
    /**
    * The name of the connection to use to connect to the Iceberg target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name CcCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * A list of global patterns used to exclude from the crawl.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#exclusions CcCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. Used to limit the crawler run time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#maximum_traversal_depth CcCrawler#maximum_traversal_depth}
    */
    readonly maximumTraversalDepth?: number;
    /**
    * One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix .
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#paths CcCrawler#paths}
    */
    readonly paths?: string[];
}
export class IcebergTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IcebergTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._exclusions !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusions = this._exclusions;
        }
        if (this._maximumTraversalDepth !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumTraversalDepth = this._maximumTraversalDepth;
        }
        if (this._paths !== undefined) {
            hasAnyValues = true;
            internalValueResult.paths = this._paths;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionName = undefined;
            this._exclusions = undefined;
            this._maximumTraversalDepth = undefined;
            this._paths = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionName = value.connectionName;
            this._exclusions = value.exclusions;
            this._maximumTraversalDepth = value.maximumTraversalDepth;
            this._paths = value.paths;
        }
    }

    // connection_name - computed: true, optional: true, required: false
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    public resetConnectionName() {
        this._connectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // exclusions - computed: true, optional: true, required: false
    private _exclusions?: string[]; 
    public get exclusions() {
        return this.getListAttribute('exclusions');
    }
    public set exclusions(value: string[]) {
        this._exclusions = value;
    }
    public resetExclusions() {
        this._exclusions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionsInput() {
        return this._exclusions;
    }

    // maximum_traversal_depth - computed: true, optional: true, required: false
    private _maximumTraversalDepth?: number; 
    public get maximumTraversalDepth() {
        return this.getNumberAttribute('maximum_traversal_depth');
    }
    public set maximumTraversalDepth(value: number) {
        this._maximumTraversalDepth = value;
    }
    public resetMaximumTraversalDepth() {
        this._maximumTraversalDepth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumTraversalDepthInput() {
        return this._maximumTraversalDepth;
    }

    // paths - computed: true, optional: true, required: false
    private _paths?: string[]; 
    public get paths() {
        return this.getListAttribute('paths');
    }
    public set paths(value: string[]) {
        this._paths = value;
    }
    public resetPaths() {
        this._paths = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathsInput() {
        return this._paths;
    }
}

export class IcebergTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : IcebergTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): IcebergTargetPropertyOutputReference {
        return new IcebergTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JdbcTargetProperty {
    /**
    * The name of the connection to use to connect to the JDBC target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name CcCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses. RAWTYPES provides the native-level datatype. COMMENTS provides comments associated with a column or table in the database.
    * 
    * If you do not need additional metadata, keep the field empty.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#enable_additional_metadata CcCrawler#enable_additional_metadata}
    */
    readonly enableAdditionalMetadata?: string[];
    /**
    * A list of glob patterns used to exclude from the crawl. For more information, see Catalog Tables with a Crawler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#exclusions CcCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * The path of the JDBC target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#path CcCrawler#path}
    */
    readonly path?: string;
}
export class JdbcTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): JdbcTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._enableAdditionalMetadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableAdditionalMetadata = this._enableAdditionalMetadata;
        }
        if (this._exclusions !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusions = this._exclusions;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JdbcTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionName = undefined;
            this._enableAdditionalMetadata = undefined;
            this._exclusions = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionName = value.connectionName;
            this._enableAdditionalMetadata = value.enableAdditionalMetadata;
            this._exclusions = value.exclusions;
            this._path = value.path;
        }
    }

    // connection_name - computed: true, optional: true, required: false
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    public resetConnectionName() {
        this._connectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // enable_additional_metadata - computed: true, optional: true, required: false
    private _enableAdditionalMetadata?: string[]; 
    public get enableAdditionalMetadata() {
        return this.getListAttribute('enable_additional_metadata');
    }
    public set enableAdditionalMetadata(value: string[]) {
        this._enableAdditionalMetadata = value;
    }
    public resetEnableAdditionalMetadata() {
        this._enableAdditionalMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAdditionalMetadataInput() {
        return this._enableAdditionalMetadata;
    }

    // exclusions - computed: true, optional: true, required: false
    private _exclusions?: string[]; 
    public get exclusions() {
        return this.getListAttribute('exclusions');
    }
    public set exclusions(value: string[]) {
        this._exclusions = value;
    }
    public resetExclusions() {
        this._exclusions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionsInput() {
        return this._exclusions;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}

export class JdbcTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : JdbcTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): JdbcTargetPropertyOutputReference {
        return new JdbcTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MongoDBTargetProperty {
    /**
    * The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name CcCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * The path of the Amazon DocumentDB or MongoDB target (database/collection).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#path CcCrawler#path}
    */
    readonly path?: string;
}
export class MongoDBTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MongoDBTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MongoDBTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionName = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionName = value.connectionName;
            this._path = value.path;
        }
    }

    // connection_name - computed: true, optional: true, required: false
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    public resetConnectionName() {
        this._connectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}

export class MongoDBTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : MongoDBTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): MongoDBTargetPropertyOutputReference {
        return new MongoDBTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface S3TargetProperty {
    /**
    * The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name CcCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#dlq_event_queue_arn CcCrawler#dlq_event_queue_arn}
    */
    readonly dlqEventQueueArn?: string;
    /**
    * A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#event_queue_arn CcCrawler#event_queue_arn}
    */
    readonly eventQueueArn?: string;
    /**
    * A list of glob patterns used to exclude from the crawl.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#exclusions CcCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * The path to the Amazon S3 target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#path CcCrawler#path}
    */
    readonly path?: string;
    /**
    * Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#sample_size CcCrawler#sample_size}
    */
    readonly sampleSize?: number;
}
export class S3TargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): S3TargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._dlqEventQueueArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dlqEventQueueArn = this._dlqEventQueueArn;
        }
        if (this._eventQueueArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventQueueArn = this._eventQueueArn;
        }
        if (this._exclusions !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusions = this._exclusions;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._sampleSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.sampleSize = this._sampleSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3TargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionName = undefined;
            this._dlqEventQueueArn = undefined;
            this._eventQueueArn = undefined;
            this._exclusions = undefined;
            this._path = undefined;
            this._sampleSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionName = value.connectionName;
            this._dlqEventQueueArn = value.dlqEventQueueArn;
            this._eventQueueArn = value.eventQueueArn;
            this._exclusions = value.exclusions;
            this._path = value.path;
            this._sampleSize = value.sampleSize;
        }
    }

    // connection_name - computed: true, optional: true, required: false
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    public resetConnectionName() {
        this._connectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // dlq_event_queue_arn - computed: true, optional: true, required: false
    private _dlqEventQueueArn?: string; 
    public get dlqEventQueueArn() {
        return this.getStringAttribute('dlq_event_queue_arn');
    }
    public set dlqEventQueueArn(value: string) {
        this._dlqEventQueueArn = value;
    }
    public resetDlqEventQueueArn() {
        this._dlqEventQueueArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dlqEventQueueArnInput() {
        return this._dlqEventQueueArn;
    }

    // event_queue_arn - computed: true, optional: true, required: false
    private _eventQueueArn?: string; 
    public get eventQueueArn() {
        return this.getStringAttribute('event_queue_arn');
    }
    public set eventQueueArn(value: string) {
        this._eventQueueArn = value;
    }
    public resetEventQueueArn() {
        this._eventQueueArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventQueueArnInput() {
        return this._eventQueueArn;
    }

    // exclusions - computed: true, optional: true, required: false
    private _exclusions?: string[]; 
    public get exclusions() {
        return this.getListAttribute('exclusions');
    }
    public set exclusions(value: string[]) {
        this._exclusions = value;
    }
    public resetExclusions() {
        this._exclusions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionsInput() {
        return this._exclusions;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // sample_size - computed: true, optional: true, required: false
    private _sampleSize?: number; 
    public get sampleSize() {
        return this.getNumberAttribute('sample_size');
    }
    public set sampleSize(value: number) {
        this._sampleSize = value;
    }
    public resetSampleSize() {
        this._sampleSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sampleSizeInput() {
        return this._sampleSize;
    }
}

export class S3TargetPropertyList extends cdktn.ComplexList {
    public internalValue? : S3TargetProperty[] | cdktn.IResolvable

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
    public get(index: number): S3TargetPropertyOutputReference {
        return new S3TargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetsProperty {
    /**
    * Specifies AWS Glue Data Catalog targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#catalog_targets CcCrawler#catalog_targets}
    */
    readonly catalogTargets?: CatalogTargetProperty[] | cdktn.IResolvable;
    /**
    * Specifies an array of Delta data store targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#delta_targets CcCrawler#delta_targets}
    */
    readonly deltaTargets?: DeltaTargetProperty[] | cdktn.IResolvable;
    /**
    * Specifies Amazon DynamoDB targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#dynamo_db_targets CcCrawler#dynamo_db_targets}
    */
    readonly dynamoDbTargets?: DynamoDBTargetProperty[] | cdktn.IResolvable;
    /**
    * Specifies Apache Hudi data store targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#hudi_targets CcCrawler#hudi_targets}
    */
    readonly hudiTargets?: HudiTargetProperty[] | cdktn.IResolvable;
    /**
    * Specifies Apache Iceberg data store targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#iceberg_targets CcCrawler#iceberg_targets}
    */
    readonly icebergTargets?: IcebergTargetProperty[] | cdktn.IResolvable;
    /**
    * Specifies JDBC targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#jdbc_targets CcCrawler#jdbc_targets}
    */
    readonly jdbcTargets?: JdbcTargetProperty[] | cdktn.IResolvable;
    /**
    * A list of Mongo DB targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#mongo_db_targets CcCrawler#mongo_db_targets}
    */
    readonly mongoDbTargets?: MongoDBTargetProperty[] | cdktn.IResolvable;
    /**
    * Specifies Amazon Simple Storage Service (Amazon S3) targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#s3_targets CcCrawler#s3_targets}
    */
    readonly s3Targets?: S3TargetProperty[] | cdktn.IResolvable;
}
export class TargetsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogTargets = this._catalogTargets?.internalValue;
        }
        if (this._deltaTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deltaTargets = this._deltaTargets?.internalValue;
        }
        if (this._dynamoDbTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDbTargets = this._dynamoDbTargets?.internalValue;
        }
        if (this._hudiTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hudiTargets = this._hudiTargets?.internalValue;
        }
        if (this._icebergTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.icebergTargets = this._icebergTargets?.internalValue;
        }
        if (this._jdbcTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jdbcTargets = this._jdbcTargets?.internalValue;
        }
        if (this._mongoDbTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mongoDbTargets = this._mongoDbTargets?.internalValue;
        }
        if (this._s3Targets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Targets = this._s3Targets?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogTargets.internalValue = undefined;
            this._deltaTargets.internalValue = undefined;
            this._dynamoDbTargets.internalValue = undefined;
            this._hudiTargets.internalValue = undefined;
            this._icebergTargets.internalValue = undefined;
            this._jdbcTargets.internalValue = undefined;
            this._mongoDbTargets.internalValue = undefined;
            this._s3Targets.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogTargets.internalValue = value.catalogTargets;
            this._deltaTargets.internalValue = value.deltaTargets;
            this._dynamoDbTargets.internalValue = value.dynamoDbTargets;
            this._hudiTargets.internalValue = value.hudiTargets;
            this._icebergTargets.internalValue = value.icebergTargets;
            this._jdbcTargets.internalValue = value.jdbcTargets;
            this._mongoDbTargets.internalValue = value.mongoDbTargets;
            this._s3Targets.internalValue = value.s3Targets;
        }
    }

    // catalog_targets - computed: true, optional: true, required: false
    private _catalogTargets = new CatalogTargetPropertyList(this, "catalog_targets", false);
    public get catalogTargets() {
        return this._catalogTargets;
    }
    public putCatalogTargets(value: CatalogTargetProperty[] | cdktn.IResolvable) {
        this._catalogTargets.internalValue = value;
    }
    public resetCatalogTargets() {
        this._catalogTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogTargetsInput() {
        return this._catalogTargets.internalValue;
    }

    // delta_targets - computed: true, optional: true, required: false
    private _deltaTargets = new DeltaTargetPropertyList(this, "delta_targets", false);
    public get deltaTargets() {
        return this._deltaTargets;
    }
    public putDeltaTargets(value: DeltaTargetProperty[] | cdktn.IResolvable) {
        this._deltaTargets.internalValue = value;
    }
    public resetDeltaTargets() {
        this._deltaTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deltaTargetsInput() {
        return this._deltaTargets.internalValue;
    }

    // dynamo_db_targets - computed: true, optional: true, required: false
    private _dynamoDbTargets = new DynamoDBTargetPropertyList(this, "dynamo_db_targets", false);
    public get dynamoDbTargets() {
        return this._dynamoDbTargets;
    }
    public putDynamoDbTargets(value: DynamoDBTargetProperty[] | cdktn.IResolvable) {
        this._dynamoDbTargets.internalValue = value;
    }
    public resetDynamoDbTargets() {
        this._dynamoDbTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbTargetsInput() {
        return this._dynamoDbTargets.internalValue;
    }

    // hudi_targets - computed: true, optional: true, required: false
    private _hudiTargets = new HudiTargetPropertyList(this, "hudi_targets", false);
    public get hudiTargets() {
        return this._hudiTargets;
    }
    public putHudiTargets(value: HudiTargetProperty[] | cdktn.IResolvable) {
        this._hudiTargets.internalValue = value;
    }
    public resetHudiTargets() {
        this._hudiTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hudiTargetsInput() {
        return this._hudiTargets.internalValue;
    }

    // iceberg_targets - computed: true, optional: true, required: false
    private _icebergTargets = new IcebergTargetPropertyList(this, "iceberg_targets", false);
    public get icebergTargets() {
        return this._icebergTargets;
    }
    public putIcebergTargets(value: IcebergTargetProperty[] | cdktn.IResolvable) {
        this._icebergTargets.internalValue = value;
    }
    public resetIcebergTargets() {
        this._icebergTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icebergTargetsInput() {
        return this._icebergTargets.internalValue;
    }

    // jdbc_targets - computed: true, optional: true, required: false
    private _jdbcTargets = new JdbcTargetPropertyList(this, "jdbc_targets", false);
    public get jdbcTargets() {
        return this._jdbcTargets;
    }
    public putJdbcTargets(value: JdbcTargetProperty[] | cdktn.IResolvable) {
        this._jdbcTargets.internalValue = value;
    }
    public resetJdbcTargets() {
        this._jdbcTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jdbcTargetsInput() {
        return this._jdbcTargets.internalValue;
    }

    // mongo_db_targets - computed: true, optional: true, required: false
    private _mongoDbTargets = new MongoDBTargetPropertyList(this, "mongo_db_targets", false);
    public get mongoDbTargets() {
        return this._mongoDbTargets;
    }
    public putMongoDbTargets(value: MongoDBTargetProperty[] | cdktn.IResolvable) {
        this._mongoDbTargets.internalValue = value;
    }
    public resetMongoDbTargets() {
        this._mongoDbTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mongoDbTargetsInput() {
        return this._mongoDbTargets.internalValue;
    }

    // s3_targets - computed: true, optional: true, required: false
    private _s3Targets = new S3TargetPropertyList(this, "s3_targets", false);
    public get s3Targets() {
        return this._s3Targets;
    }
    public putS3Targets(value: S3TargetProperty[] | cdktn.IResolvable) {
        this._s3Targets.internalValue = value;
    }
    public resetS3Targets() {
        this._s3Targets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3TargetsInput() {
        return this._s3Targets.internalValue;
    }
}
}
