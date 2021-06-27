import {AttributeType, IAttribute, ICoordinates, IEntity, IProjectConfig} from "api-builder-types";
import {Guid} from 'guid-typescript';
import {IRelationship} from "api-builder-types/relationship";

const guidCreate = () => Guid.create().toJSON().value;

const groupId = guidCreate();
const groupPkAttributeId = guidCreate();

const createRelationship = (attribute: string, entity: string): IRelationship => ({
    Identifier: guidCreate(),
    RightSide: {
        // to entity
        Entity: entity,
        // primary key of the related entity
        PrimaryKeyReferenced: attribute,
        Multiplicity: 0
    }
});

const createAttribute = (nullable: boolean, type: AttributeType, name: string, identifier?: string): IAttribute => ({
    Identifier: identifier || guidCreate(),
    IsNullable: nullable,
    Type: type,
    Name: name
});

const createEntity = (id: string, name: string, coordinates: ICoordinates, attributes: IAttribute[], relations: IRelationship[], attributePK: string): IEntity => ({
    Identifier: id,
    Coordinates: coordinates,
    Constraints: [],
    Attributes: attributes,
    Name: name,
    Relationships: relations,
    PK: [attributePK]
});

const userAttributes = [
    createAttribute(false, AttributeType.String, 'Id'),
    createAttribute(true, AttributeType.String, 'name'),
    createAttribute(true, AttributeType.Date, 'birthDate'),
    createAttribute(true, AttributeType.String, 'email'),
    createAttribute(false, AttributeType.String, 'groupId'),
];
const groupAttributes = [
    createAttribute(false, AttributeType.String, 'Id', groupPkAttributeId),
    createAttribute(true, AttributeType.Date, 'expiringDate'),
    createAttribute(true, AttributeType.String, 'name')
];
const categoryAttributes = [
    createAttribute(false, AttributeType.String, 'Id'),
    createAttribute(true, AttributeType.String, 'name'),
    createAttribute(false, AttributeType.String, 'groupId'),
];
const relatedToGroup = [createRelationship(groupPkAttributeId, groupId)];

export const projectConfig: IProjectConfig = {
    Entities: [
        createEntity(guidCreate(), 'User', {X: 200, Y: 200}, userAttributes, relatedToGroup, userAttributes[0].Identifier),
        createEntity(groupId, 'Group', {X: 600, Y: 600}, groupAttributes, [], groupAttributes[0].Identifier),
        createEntity(guidCreate(), 'Category', {X: 600, Y: 1000}, categoryAttributes, relatedToGroup, categoryAttributes[0].Identifier),
    ],
    Identifier: guidCreate(),
    Type: 0
};


